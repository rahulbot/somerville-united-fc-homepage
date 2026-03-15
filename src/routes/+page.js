import { loadCalendars } from "$lib/schedules.js";

export const ssr = false;

export const load = async ({fetch, params}) => {
  return loadCalendars(fetch);
};
