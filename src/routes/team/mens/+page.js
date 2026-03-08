import Papa from "papaparse";

const ROSTER_MENS_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT4etBKkA83bxtTPnqE2pttWswdLDx6D9FaAhZQnS6o13DOJ2dSm3tBSsfZ_Nd0ul48sbKW1yKa9P1H/pub?output=csv";

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

export const load = async ({fetch, params}) => {
  try {
    const response = await fetch(ROSTER_MENS_URL);
    const players = await response.text();

    const parsed = Papa.parse(players, {header: true, skipEmptyLines: true});
  
    // add some extracted metadata
    const cleanedData = parsed.data.filter(row => Object.keys(row).some(key => row[key]));
    const dataWithFlags = cleanedData.map(player => {
      const country = player['Hometown'] ? player['Hometown'].split(',')[1].trim() : 'USA';
      const flag = countryLookup[country] || '🇺🇸';
      const photoFileName = "/images/teams/mens/"+(player['First Name'].toLowerCase() + '-' + player['Last Name'].toLowerCase() + '.png').replace(" ",'');
      return { ...player, flag, photoFileName };
    });

    return {
      players: dataWithFlags
    };
  } catch (error) {
    console.error("Error fetching or parsing CSV data:", error);
    return { players: [] };
  }
};
