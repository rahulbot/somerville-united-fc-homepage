import Papa from "papaparse";
import { MD5 } from "./string.js";

// Use local browser state to cache config metadata for a short period to avoid excessive 
// network requests and parsing on every page load. This is especially helpful because
// underlying metadata doesn't change too frequently.

const METADATA_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTV0vjhzAxcA7MvOtOWiuwrp9u7pMCr3CjWLXwgxhi3KuRveFvgFPVor98FVt1XuIAHWzdnyyE2fM-/pub?gid=1264107990&single=true&output=csv";

const METADATA_CACHE_KEY = "sufc:metadata:v1"; // increment version to ignore old caches when metadata structure changes
const METADATA_CACHE_TTL_MS = 5 * 60 * 1000;

function readCachedMetadata() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const cachedValue = window.localStorage.getItem(METADATA_CACHE_KEY);
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

    const isExpired = Date.now() - cachedAt > METADATA_CACHE_TTL_MS;
    if (isExpired) {
      return null;
    }

    return data;
  } catch {
    return null;
  }
}

function writeCachedMetadata(data) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    const payload = JSON.stringify({
      cachedAt: Date.now(),
      data
    });
    window.localStorage.setItem(METADATA_CACHE_KEY, payload);
  } catch {}
}

const parseDate = (dateStr) => {
  try {
    return new Date(dateStr);
  } catch {
    return null;
  }
};

export async function loadMetadata(fetch = globalThis.fetch) {
  const cachedMetadata = readCachedMetadata();
  if (cachedMetadata) {
    return cachedMetadata;
  }

  try {
    // fetch the metadata
    const response = await fetch(METADATA_SHEET_URL);
    const csv = await response.text();
    const parsed = Papa.parse(csv, {header: true});
    let data = parsed.data.filter(row => Object.keys(row).some(key => row[key]));

    // reshape data
    const metadataLookup = {};
    data.forEach(row => 
        metadataLookup[row.key] = row.value
    )
    // cache it in user's browser for short-term to avoid excessive network requests and parsing on every page load
    writeCachedMetadata(metadataLookup);

    return metadataLookup;
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {};
  }
}
