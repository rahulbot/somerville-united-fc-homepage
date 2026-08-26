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
  return ticketableGames;
}

export function getGamesToday(calendarData) {
  // return a list of game objects for any games across all seasons and leagues happening today
  const today = new Date();
  let gamesToday = [];
  for (const season in calendarData) {
    const seasonData = calendarData[season];
    for (const league in seasonData) {
      const schedule = seasonData[league]; 
      const todayGames = schedule.filter((game) => {
        const gameDate = new Date(game.parsedDate);
        const isToday = (
            gameDate.getFullYear() === today.getFullYear() &&
            gameDate.getMonth() === today.getMonth() &&
            gameDate.getDate() === today.getDate() &&
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
    const response = await fetch(SCHEDULE_GSHEET_URL);
    const csv = await response.text();
    const parsed = Papa.parse(csv, {header: true});
    let data = parsed.data.filter(row => Object.keys(row).some(key => row[key]));

    // augment data
    const augmentGame = (g) => {
      g.league = g['League'];
      g.opponent = g.Home.includes("Somerville United") ? g.Away : g.Home;
      g.parsedDate = parseDate(g.Date);
      g.day = g.parsedDate ? g.parsedDate.toLocaleDateString('en-US', { weekday: 'long' }) : null;
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
