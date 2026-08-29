import Papa from "papaparse";
import { MD5 } from "./string.js";

// Use local browser state to cache calendar data for a short period to avoid excessive 
// network requests and parsing on every page load. This is especially helpful because
// underlying schedule data doesn't change too frequently.

const SCHEDULE_GSHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTV0vjhzAxcA7MvOtOWiuwrp9u7pMCr3CjWLXwgxhi3KuRveFvgFPVor98FVt1XuIAHWzdnyyE2fM-/pub?gid=921035753&single=true&output=csv";
const CALENDAR_CACHE_KEY = "sufc:calendars:v2"; // increment version to ignore old caches when calendar structure changes
const CALENDAR_CACHE_TTL_MS = 5 * 60 * 1000;

export function getLeagueTeamName(leagueGames) {
  // based on the first game figure out the team name
  return leagueGames[0].Home.includes("Somerville United") ? leagueGames[0].Home : leagueGames[0].Away;
}

export function getTicketableGames(calendarData) {
  // get a list of games in the current season, across leagues, that are maked as tickeable
  const currentSeason = getCurrentSeason(calendarData);
  let ticketableGames = [];
  for (const league in currentSeason) {
    const schedule = currentSeason[league];
    const leagueTicketableGames = schedule.filter(game => game.RSVPable);
    ticketableGames = ticketableGames.concat(leagueTicketableGames);
  }
  ticketableGames.sort((a, b) => a.parsedDate - b.parsedDate);
  return ticketableGames;
}

export function getGamesToday(calendarData) {
  // return a list of game objects for any games across all seasons and leagues happening today
  const todayKey = getDateKeyInTimeZone(new Date(), GAME_TIMEZONE);
  let gamesToday = [];
  for (const season in calendarData) {
    const seasonData = calendarData[season];
    for (const league in seasonData) {
      const schedule = seasonData[league];
      const todayGames = schedule.filter((game) => {
        const isToday = (
            game.parsedDate &&
            getDateKeyInTimeZone(game.parsedDate, GAME_TIMEZONE) === todayKey &&
            (game.Result === null || game.Result.length == 0) // because some games might be foreited already
        );
        return isToday;
      });
      gamesToday = gamesToday.concat(todayGames);
    }
  }
  return gamesToday;
}

export function getCurrentSeason(calendarData) {
  // get the name of the current season
  return calendarData[getCurrentSeasonName(calendarData)];
}

export function getCurrentSeasonName(calendarData) {
  // get the name of the current season (the last one)
  // ASSUMPTION: sheet is ordered by oldest to newest
  return Object.keys(calendarData).at(-1); // current season info
}

export function getCalendarNameForLeague(league) {
  // SYNC: this is used both here, in showing links on schedule page, and in calendar generation script
  return `sufc-mens-${league.toLowerCase()}.ics`;
}

function readCachedCalendars() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const cachedValue = window.localStorage.getItem(CALENDAR_CACHE_KEY);
    if (!cachedValue) {
      return null;
    }

    const parsedCache = JSON.parse(cachedValue);
    if (!parsedCache || typeof parsedCache !== "object") {
      return null;
    }

    const { cachedAt, data } = parsedCache;
    if (typeof cachedAt !== "number" || !data) {
      return null;
    }

    const isExpired = Date.now() - cachedAt > CALENDAR_CACHE_TTL_MS;
    if (isExpired) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

function writeCachedCalendars(data) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const payload = JSON.stringify({
      cachedAt: Date.now(),
      data
    });
    window.localStorage.setItem(CALENDAR_CACHE_KEY, payload);
  } catch {}
}

const GAME_TIMEZONE = 'America/New_York'; // games are always scheduled in US Eastern time

// ms to add to `date`'s real timestamp to get the value you'd see by taking its
// wall-clock digits in `timeZone` and treating them as UTC instead
const getTimeZoneOffsetMs = (date, timeZone) => {
  const dtf = new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit'
  });
  const parts = dtf.formatToParts(date).reduce((acc, { type, value }) => {
    if (type !== 'literal') acc[type] = value;
    return acc;
  }, {});
  const asUTC = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second);
  return asUTC - date.getTime();
};

// YYYY-MM-DD calendar date for `date` as seen in `timeZone`, for same-day comparisons
const getDateKeyInTimeZone = (date, timeZone) => {
  const dtf = new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' });
  return dtf.format(date); // en-CA formats as YYYY-MM-DD
};

// parses strings like "4:00 PM" / "4:00PM" into {hours, minutes} (24h), or null if unparseable
const parseTimeOfDay = (timeStr) => {
  const match = typeof timeStr === 'string' && timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (!match) return null;
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const meridiem = match[3] && match[3].toUpperCase();
  if (meridiem === 'PM' && hours !== 12) hours += 12;
  if (meridiem === 'AM' && hours === 12) hours = 0;
  return { hours, minutes };
};

const parseDate = (dateStr, timeStr) => {
  try {
    // dateStr/timeStr have no timezone info, so new Date() reads their digits
    // as the browser's local wall clock. Re-anchor those same digits (date,
    // plus kickoff time when we have one) to America/New_York instead, so the
    // result doesn't depend on the viewer's timezone (DST-aware).
    const naive = new Date(dateStr);
    if (isNaN(naive)) return null;
    const timeOfDay = parseTimeOfDay(timeStr);
    const digitsAsUTC = Date.UTC(
      naive.getFullYear(), naive.getMonth(), naive.getDate(),
      timeOfDay ? timeOfDay.hours : 0, timeOfDay ? timeOfDay.minutes : 0, 0
    );
    return new Date(digitsAsUTC - getTimeZoneOffsetMs(naive, GAME_TIMEZONE));
  } catch {
    return null;
  }
};

export async function loadCalendars(fetch = globalThis.fetch) {
  const cachedCalendars = readCachedCalendars();
  if (cachedCalendars) {
    return cachedCalendars;
  }

  try {
    // fetch the combined calendar (in one so there is only one GET sent)
    const response = await fetch(SCHEDULE_GSHEET_URL);
    const csv = await response.text();
    const parsed = Papa.parse(csv, {header: true});
    let data = parsed.data.filter(row => Object.keys(row).some(key => row[key]));

    // augment data
    const augmentGame = (g) => {
      g.league = g['League'];
      g.opponent = g.Home.includes("Somerville United") ? g.Away : g.Home;
      g.parsedDate = parseDate(g.Date, g.Time);
      g.day = g.parsedDate ? g.parsedDate.toLocaleDateString('en-US', { weekday: 'long', timeZone: GAME_TIMEZONE }) : null;
      g.id = MD5(`${g.league}-${g.parsedDate}`); // should be relatively stable across calendar edits
      g.finished = g.Result && g.Result.trim() !== "";
      g.RSVPable = !g.finished && (g.Tickets == "RSVP");
    };
    // don't sort this because sometimes we don't have final dates for games

    // separate by Season
    const seasons = [...new Set(data.map(g => g["Season"]))];
    const bySeasonAndLeague = {};
    seasons.forEach(season => {
      const seasonGames = data.filter(g => g["Season"] === season);
      seasonGames.forEach(g => augmentGame(g));
      // separate by league
      const leagues = [...new Set(seasonGames.map(g => g["League"]))];
      const gamesByLeague = {};
      leagues.forEach(league => {
        gamesByLeague[league] = seasonGames.filter(g => g["League"] === league);
      });
      bySeasonAndLeague[season] = gamesByLeague;
    });


    // cache it in user's browser for short-term to avoid excessive network requests and parsing on every page load
    writeCachedCalendars(bySeasonAndLeague);

    return bySeasonAndLeague;
  } catch (error) {
    console.error("Error fetching or parsing CSV data:", error);
    return {};
  }
}
