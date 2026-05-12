import Papa from "papaparse";
import { MD5 } from "./string.js";

// Use local browser state to cache calendar data for a short period to avoid excessive 
// network requests and parsing on every page load. This is especially helpful because
// underlying schedule data doesn't change too frequently.

const CURRENT_SEASON_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTV0vjhzAxcA7MvOtOWiuwrp9u7pMCr3CjWLXwgxhi3KuRveFvgFPVor98FVt1XuIAHWzdnyyE2fM-/pub?gid=921035753&single=true&output=csv";
const CALENDAR_CACHE_KEY = "sufc:calendars:v2"; // increment version to ignore old caches when calendar structure changes
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

const parseDate = (dateStr) => {
  try {
    return new Date(dateStr);
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
    const response = await fetch(CURRENT_SEASON_URL);
    const csv = await response.text();
    const parsed = Papa.parse(csv, {header: true});
    let data = parsed.data.filter(row => Object.keys(row).some(key => row[key]));

    // augment data
    const augmentGame = (g, league) => {
      g.league = league;
      g.opponent = g.Home.includes("Somerville United") ? g.Away : g.Home;
      g.parsedDate = parseDate(g.Datedate);
      g.day = g.parsedDate ? g.parsedDate.toLocaleDateString('en-US', { weekday: 'long' }) : null;
      g.id = MD5(`${g.league}-${g.parsedDate}`); // should be relatively stable across calendar edits
      g.finished = g.Result && g.Result.trim() !== "";
      g.RSVPable = !g.finished && (g.Tickets == "RSVP");
    };
    data.forEach(g => augmentGame(g, 'APSL'));
    // don't sort this because sometimes we don't have final dates for games

    // separate by league
    const leagues = [...new Set(data.map(g => g["League"]))];
    const gamesByLeague = {};
    leagues.forEach(league => {
      gamesByLeague[league] = data.filter(g => g["League"] === league);
    });

    // cache it in user's browser for short-term to avoid excessive network requests and parsing on every page load
    writeCachedCalendars(gamesByLeague);

    return gamesByLeague;
  } catch (error) {
    console.error("Error fetching or parsing CSV data:", error);
    return { 'APSL': [], 'CASA': [] };
  }
}
