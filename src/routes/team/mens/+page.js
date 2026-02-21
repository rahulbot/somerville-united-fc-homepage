import Papa from "papaparse";
import mensRosterUrl from "@assets/data/rosters/mens-apsl.csv?url";

export const ssr = false;

export const load = async () => {
  const response = await fetch(mensRosterUrl);
  const csv = await response.text();
  
  const parsed = Papa.parse(csv, {
    header: true,
  });
  
  return {
    players: parsed.data.filter(row => Object.keys(row).some(key => row[key]))
  };
};
