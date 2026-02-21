import Papa from "papaparse";
import mensRosterUrl from "@assets/data/rosters/mens-apsl.csv?url";

export const ssr = false;

const countryLookup = {
    'Jamaica': '🇯🇲',
    'Ghana': '🇬🇭', 
    'Morocco': '🇲🇦',
    'Colombia': '🇨🇴',
    'Brazil': '🇧🇷',
    'Nigeria': '🇳🇬',
    'Sierra Leone': '🇸🇱',
    'Germany': '🇩🇪',
};

export const load = async () => {
  const response = await fetch(mensRosterUrl);
  const csv = await response.text();
  
  const parsed = Papa.parse(csv, {
    header: true,
  });
  
  // add the country flag based on the hometown
  const cleanedData = parsed.data.filter(row => Object.keys(row).some(key => row[key]));
  const dataWithFlags = cleanedData.map(player => {
    const country = player['Hometown'].split(',')[1].trim();
    const flag = countryLookup[country] || '🇺🇸';
    return {
      ...player,
      flag: `${flag}`
    };
  });

  return {
    players: dataWithFlags
  };
};
