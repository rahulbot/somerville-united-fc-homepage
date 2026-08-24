import { loadCalendars } from "$lib/schedules.js";

export const ssr = false;

export const load = ({fetch, params}) => {
  return {calendars: loadCalendars(fetch)};
};
