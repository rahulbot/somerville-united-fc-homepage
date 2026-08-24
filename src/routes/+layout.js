export const prerender = true;
import { loadMetadata } from "$lib/metadata.js";

export const ssr = false;

export const load = ({fetch, params}) => {
  return {
    metadata: loadMetadata(),
  };
};
