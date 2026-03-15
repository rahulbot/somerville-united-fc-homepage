import Papa from "papaparse";

// Use local browser state to cache calendar data for a short period to avoid excessive network requests and parsing on every page load. This is especially helpful if the underlying data doesn't change frequently.

const MENS_LIVE_APSL_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTV0vjhzAxcA7MvOtOWiuwrp9u7pMCr3CjWLXwgxhi3KuRveFvgFPVor98FVt1XuIAHWzdnyyE2fM-/pub?gid=0&single=true&output=csv"
const MENS_LIVE_CASA_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTV0vjhzAxcA7MvOtOWiuwrp9u7pMCr3CjWLXwgxhi3KuRveFvgFPVor98FVt1XuIAHWzdnyyE2fM-/pub?gid=1397827381&single=true&output=csv"
const CALENDAR_CACHE_KEY = "sufc:calendars:v1";
const CALENDAR_CACHE_TTL_MS = 5 * 60 * 1000;

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

export async function loadCalendars(fetch) {
  const cachedCalendars = readCachedCalendars();
  if (cachedCalendars) {
    return cachedCalendars;
  }

  try {
    const [responseApsl, responseCasa] = await Promise.all([
      fetch(MENS_LIVE_APSL_URL),
      fetch(MENS_LIVE_CASA_URL)
    ]);
    const csvApsl = await responseApsl.text();
    const csvCasa = await responseCasa.text();
    
    const parsedAPSL = Papa.parse(csvApsl, {header: true});
    const gamesAPSL = parsedAPSL.data.filter(row => Object.keys(row).some(key => row[key]));
    
    const parsedCasa = Papa.parse(csvCasa, {header: true});
    const gamesCasa = parsedCasa.data.filter(row => Object.keys(row).some(key => row[key])).filter(
      game => game["Home"] === "Somerville United FC II" || game["Away"] === "Somerville United FC II"
    )

    // clean up dates
    const parseDate = (dateStr) => {
      try {
        return new Date(dateStr);
      } catch {
        return null;
      }
    };
    gamesAPSL.forEach(g => g.parsedDate = parseDate(g.Date));
    gamesCasa.forEach(g => g.parsedDate = parseDate(g.Date));

    const calendarData = { gamesApsl: gamesAPSL, gamesCasa: gamesCasa };
    writeCachedCalendars(calendarData);

    return calendarData;
  } catch (error) {
    console.error("Error fetching or parsing CSV data:", error);
    return { gamesApsl: [], gamesCasa: [] };
  }
}
