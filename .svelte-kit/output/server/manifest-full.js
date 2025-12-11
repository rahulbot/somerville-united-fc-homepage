export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","opengraph.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.-d9K5unB.js",app:"_app/immutable/entry/app.D5s60rYR.js",imports:["_app/immutable/entry/start.-d9K5unB.js","_app/immutable/chunks/CAqBEpXB.js","_app/immutable/chunks/D7vZdRf8.js","_app/immutable/chunks/NbAgTvdW.js","_app/immutable/chunks/CBGfb6Ky.js","_app/immutable/entry/app.D5s60rYR.js","_app/immutable/chunks/D7vZdRf8.js","_app/immutable/chunks/C--ZFUzQ.js","_app/immutable/chunks/Dc5h6h_B.js","_app/immutable/chunks/Dm0lbLVj.js","_app/immutable/chunks/CBGfb6Ky.js","_app/immutable/chunks/BwAkkW-z.js","_app/immutable/chunks/C07XrPB8.js","_app/immutable/chunks/NbAgTvdW.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/board",
				pattern: /^\/board\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/team",
				pattern: /^\/team\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
