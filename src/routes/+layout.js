export const prerender = true;
import { loadMetadata } from "$lib/metadata.js";

export const ssr = false;

export const load = async ({fetch, params}) => {
  const metadata = await loadMetadata();
  return {
    ...metadata
  };
};
