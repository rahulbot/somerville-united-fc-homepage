import Papa from "papaparse";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Game schedule URLs from Google Sheets
const MENS_LIVE_APSL_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTV0vjhzAxcA7MvOtOWiuwrp9u7pMCr3CjWLXwgxhi3KuRveFvgFPVor98FVt1XuIAHWzdnyyE2fM-/pub?gid=0&single=true&output=csv";
const MENS_LIVE_CASA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTV0vjhzAxcA7MvOtOWiuwrp9u7pMCr3CjWLXwgxhi3KuRveFvgFPVor98FVt1XuIAHWzdnyyE2fM-/pub?gid=1397827381&single=true&output=csv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.join(__dirname, "../static/calendars");

/**
 * Parse date and time strings into local time object
 * Returns null if date or time is invalid/TBD
 * Times are from the spreadsheet in America/New_York timezone
 */
function parseGameDateTime(dateStr, timeStr) {
  if (!dateStr || dateStr === "TBD") return null;
  
  const datePart = new Date(dateStr);
  if (isNaN(datePart)) return null;

  // If time is TBD or invalid, skip this game
  if (!timeStr || timeStr === "TBD") {
    return null;
  }

  let hours = 0,
    minutes = 0;
  const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (!timeMatch) {
    return null; // Invalid time format
  }

  hours = parseInt(timeMatch[1]);
  minutes = parseInt(timeMatch[2]);
  if (timeMatch[3] && timeMatch[3].toUpperCase() === "PM" && hours !== 12) {
    hours += 12;
  }
  if (timeMatch[3] && timeMatch[3].toUpperCase() === "AM" && hours === 12) {
    hours = 0;
  }

  return {
    year: datePart.getFullYear(),
    month: String(datePart.getMonth() + 1).padStart(2, "0"),
    date: String(datePart.getDate()).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
  };
}

/**
 * Generate a UUID v4
 */
function generateUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Create a VEVENT string with proper timezone handling
 */
function createVEventString(
  uid,
  summary,
  dateTime,
  description,
  location,
  durationHours = 2
) {
  const now = new Date();
  const dtstamp = [
    now.getUTCFullYear(),
    String(now.getUTCMonth() + 1).padStart(2, "0"),
    String(now.getUTCDate()).padStart(2, "0"),
    String(now.getUTCHours()).padStart(2, "0"),
    String(now.getUTCMinutes()).padStart(2, "0"),
    String(now.getUTCSeconds()).padStart(2, "0"),
  ].join("");

  const dtstart = `${dateTime.year}${dateTime.month}${dateTime.date}T${dateTime.hours}${dateTime.minutes}00`;

  // Calculate end time
  let endHours = parseInt(dateTime.hours) + durationHours;
  let endDate = parseInt(dateTime.date);
  let endMonth = parseInt(dateTime.month);
  let endYear = parseInt(dateTime.year);

  if (endHours >= 24) {
    endHours -= 24;
    endDate += 1;
  }

  const dtend = `${endYear}${String(endMonth).padStart(2, "0")}${String(endDate).padStart(2, "0")}T${String(endHours).padStart(2, "0")}${dateTime.minutes}00`;

  // Escape description for ICS format
  const escapedDescription = description
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,");
  const escapedLocation = location.replace(/,/g, "\\,");

  return [
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}Z`,
    `DTSTART;TZID=America/New_York:${dtstart}`,
    `DTEND;TZID=America/New_York:${dtend}`,
    `SUMMARY:${summary}`,
    `DESCRIPTION:${escapedDescription}`,
    `LOCATION:${escapedLocation}`,
    "END:VEVENT",
  ].join("\r\n");
}

/**
 * Create ICS calendar from games list
 */
async function generateCalendarFile(games, filename, teamFilter = null) {
  const eventStrings = [];
  const seenGames = new Set();

  for (const game of games) {
    // Skip empty rows
    if (!game.Date || !game.Home || !game.Away) {
      console.warn(`Skipping incomplete game entry: ${JSON.stringify(game)}`);
      continue;
    }

    // Skip duplicates
    const gameKey = `${game.Date}|${game.Home}|${game.Away}`;
    if (seenGames.has(gameKey)) continue;
    seenGames.add(gameKey);


    const gameDateTime = parseGameDateTime(game.Date, game.Time);
    if (!gameDateTime) continue;

    const isHome = game.Home === (teamFilter || "Somerville United FC");
    const opponent = isHome ? game.Away : game.Home;
    const title = `${teamFilter || "SUFC"} ${isHome ? "vs" : "@"} ${opponent}`;
    const description = `${isHome ? "Home" : "Away"} game\nVenue: ${game.Venue || "TBD"}${
      game.Address ? "\nAddress: " + game.Address : ""
    }`;
    const location = game.Venue || game.Address || "";

    const uid = generateUID();
    const vEvent = createVEventString(
      uid,
      title,
      gameDateTime,
      description,
      location,
      2
    );
    eventStrings.push(vEvent);
  }

  if (eventStrings.length === 0) {
    console.warn(`No valid events found for ${filename}`);
    return;
  }

  // Build the complete calendar
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Somerville United FC//Event Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${filename.replace(".ics", "")}`,
    "X-WR-TIMEZONE:America/New_York",
    "BEGIN:VTIMEZONE",
    "TZID:America/New_York",
    "BEGIN:STANDARD",
    "DTSTART:20231105T020000",
    "TZOFFSETFROM:-0400",
    "TZOFFSETTO:-0500",
    "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
    "END:STANDARD",
    "BEGIN:DAYLIGHT",
    "DTSTART:20230312T020000",
    "TZOFFSETFROM:-0500",
    "TZOFFSETTO:-0400",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
    "END:DAYLIGHT",
    "END:VTIMEZONE",
    ...eventStrings,
    "END:VCALENDAR",
  ].join("\r\n");

  // Ensure output directory exists
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  // Write the file
  const filepath = path.join(OUTPUT_DIR, filename);
  await fs.writeFile(filepath, icsContent, "utf-8");
  console.log(`✓ Generated ${filename} (${eventStrings.length} events)`);
}

/**
 * Main function to fetch CSVs and generate calendars
 */
async function main() {
  try {
    console.log("Fetching game schedules...");
    const [responseApsl, responseCasa] = await Promise.all([
      fetch(MENS_LIVE_APSL_URL),
      fetch(MENS_LIVE_CASA_URL),
    ]);

    const csvApsl = await responseApsl.text();
    const csvCasa = await responseCasa.text();

    console.log("Parsing CSV data...");
    const parsedAPSL = Papa.parse(csvApsl, { header: true });
    const gamesAPSL = parsedAPSL.data.filter(
      (row) => Object.keys(row).some((key) => row[key])
    );

    const parsedCasa = Papa.parse(csvCasa, { header: true });
    const gamesCasa = parsedCasa.data.filter(
      (row) => Object.keys(row).some((key) => row[key])
    );

    console.log(`Found ${gamesAPSL.length} APSL games and ${gamesCasa.length} CASA games`);

    // Generate calendars
    await generateCalendarFile(gamesAPSL, "somerville-united-mens-apsl.ics", "Somerville United FC");
    await generateCalendarFile(gamesCasa, "somerville-united-mens-casa.ics", "Somerville United FC II");

    console.log("\n✓ Calendar generation complete!");
  } catch (error) {
    console.error("Error generating calendars:", error);
    process.exit(1);
  }
}

main();
