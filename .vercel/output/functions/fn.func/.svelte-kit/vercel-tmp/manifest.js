export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.bff48386.mjs","imports":["_app/immutable/entry/start.bff48386.mjs","_app/immutable/chunks/index.1e1ef57f.mjs","_app/immutable/chunks/singletons.e569315e.mjs"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.0956c29d.mjs","imports":["_app/immutable/entry/app.0956c29d.mjs","_app/immutable/chunks/index.1e1ef57f.mjs"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/playlists",
				pattern: /^\/api\/playlists\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/playlists/_server.js')
			},
			{
				id: "/api/playlists/add",
				pattern: /^\/api\/playlists\/add\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/playlists/add/_server.js')
			},
			{
				id: "/api/playlists/create",
				pattern: /^\/api\/playlists\/create\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/playlists/create/_server.js')
			},
			{
				id: "/api/tracks/[playlistId]",
				pattern: /^\/api\/tracks\/([^/]+?)\/?$/,
				params: [{"name":"playlistId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/api/tracks/_playlistId_/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
