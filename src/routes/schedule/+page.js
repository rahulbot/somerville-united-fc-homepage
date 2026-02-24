import Papa from "papaparse";
import mensAPSLUrl from "@assets/data/schedules/mens-apsl-spring-2026.csv?url";
import mensCASAUrl from "@assets/data/schedules/mens-casa-spring-2026.csv?url";

export const ssr = false;

export const load = async () => {
  const [responseApsl, responseCasa] = await Promise.all([
    fetch(mensAPSLUrl),
    fetch(mensCASAUrl)
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
};
