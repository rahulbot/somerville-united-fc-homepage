import Papa from "papaparse";
import mensAPSLUrl from "@assets/data/schedules/mens-apsl-spring-2026.csv?url";

export const ssr = false;

export const load = async () => {
  const response = await fetch(mensAPSLUrl);
  const csv = await response.text();
  
  const parsed = Papa.parse(csv, {
    header: true,
  });
  
  return {
    games: parsed.data.filter(row => Object.keys(row).some(key => row[key]))
  };
};
