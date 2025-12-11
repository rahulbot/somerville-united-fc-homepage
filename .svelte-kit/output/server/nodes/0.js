import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Dz9vGKnN.js","_app/immutable/chunks/Dm0lbLVj.js","_app/immutable/chunks/D7vZdRf8.js","_app/immutable/chunks/BakxOcxD.js","_app/immutable/chunks/C5Lmx5cn.js","_app/immutable/chunks/fd-YmQf2.js","_app/immutable/chunks/Dc5h6h_B.js","_app/immutable/chunks/C07XrPB8.js","_app/immutable/chunks/NbAgTvdW.js","_app/immutable/chunks/BnxWgzhy.js","_app/immutable/chunks/C--ZFUzQ.js","_app/immutable/chunks/BwAkkW-z.js","_app/immutable/chunks/CAqBEpXB.js","_app/immutable/chunks/CBGfb6Ky.js"];
export const stylesheets = ["_app/immutable/assets/Newsletter.Cb3MPKgw.css","_app/immutable/assets/0.CX6ZYsJe.css"];
export const fonts = [];
