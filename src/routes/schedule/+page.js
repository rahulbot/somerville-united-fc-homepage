import Papa from "papaparse";
import mensCASAUrl from "@assets/data/schedules/mens-casa-spring-2026.csv?url";

const MENS_LIVE_APSL_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTV0vjhzAxcA7MvOtOWiuwrp9u7pMCr3CjWLXwgxhi3KuRveFvgFPVor98FVt1XuIAHWzdnyyE2fM-/pub?gid=0&single=true&output=csv"
const MENS_LIVE_CASA_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRTV0vjhzAxcA7MvOtOWiuwrp9u7pMCr3CjWLXwgxhi3KuRveFvgFPVor98FVt1XuIAHWzdnyyE2fM-/pub?gid=1397827381&single=true&output=csv"

export const ssr = false;

export const load = async () => {
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
    return { gamesApsl: gamesAPSL, gamesCasa: gamesCasa };
  } catch (error) {
    console.error("Error fetching or parsing CSV data:", error);
    return { gamesApsl: [], gamesCasa: [] };
  }
};
