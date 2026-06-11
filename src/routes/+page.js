import { loadCalendars } from "$lib/schedules.js";

export const ssr = false;

export const load = async ({fetch, params}) => {
  const calendars = await loadCalendars(fetch);
  return {calendars};
};
