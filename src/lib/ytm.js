function getOptions() {
	const requestOptions = {
		method: "GET",
		headers: {
			"x-ytm-cookie": localStorage.getItem("x-ytm-cookie"),
			"x-ytm-user": localStorage.getItem("x-ytm-user") || 0,
		},
	};

	return requestOptions;
}

function postOptions(data) {
	const requestOptions = {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			"x-ytm-cookie": localStorage.getItem("x-ytm-cookie"),
			"x-ytm-user": localStorage.getItem("x-ytm-user") || 0,
		},
	};

	return requestOptions;
}

/**
 * Check if cookie values from YouTube Music have been defined.
 *
 * @returns {Boolean}
 */
export function hasYoutubeMusicCookie() {
	let cookie = localStorage.getItem("x-ytm-cookie");
	if (!cookie) {
		return false;
	}

	cookie = cookie.trim();
	if (cookie.length <= 0 || cookie.indexOf("=") < 0) {
		return false;
	}

	if (cookie.indexOf("__Secure-3PAPISID") < 0) {
		return false;
	}

	return true;
}

/**
 * Create a YouTube playlist.
 *
 * @param {string} title
 * @param {string} description
 * @param {string[]} videoIds
 * @return {id: string, name: string}
 */
export async function createPlaylist(title, description = "", videoIds = []) {
	const response = await fetch(`/api/playlists/create`, postOptions({title, description, videoIds}));
	const data = await response.json();
	return data;
}

/**
 * Add a single track to a playlist.
 *
 * @param {string} playlistId
 * @param {string} videoId
 * @return bool
 */
export async function addTrackToPlaylist(playlistId, videoId) {
	const response = await fetch(`/api/playlists/add`, postOptions({playlistId, videoId}));
	const data = await response.json();
	return data;
}

/**
 * Add multiple tracks to playlist.
 * Note, YouTube only allows up to 200 tracks to be added at once.
 *
 * @param {String} playlistId
 * @param {String[]} videoIds
 * @return {id: string, title: string, count: int}
 */
export async function addTracksToPlaylist(playlistId, videoIds) {
	const response = await fetch(`/api/playlists/add`, postOptions({playlistId, videoIds}));
	const data = await response.json();
	return data;
}

/**
 * Get authenticated user's playlists.
 *
 * @return {id: string, title: string}
 */
export async function getPlaylists() {
	const response = await fetch("/api/playlists", getOptions());
	const data = await response.json();
	console.log("getPlaylists", data);
	return data;
}

/**
 * Get tracks from playlist
 *
 * @param {string} playlist
 *
 * @return {id: string, title: string, artists?: any[], album?: {id: string, title: string}}
 */
export async function getTracks(playlistId, limit = 100) {
	try {
		const response = await fetch(`/api/tracks/${playlistId}?limit=${limit}`, getOptions());
		const data = await response.json();
		console.log("getTracks", data);
		return data;
	} catch (err) {
		console.log(err);
		return [];
	}
}

export async function getTrackContinuations(playlistId, token) {
	const response = await fetch(`/api/tracks/${playlistId}?token=${token}`, getOptions());
	const data = await response.json();
	console.log("getTrackContinuations", data);
	return data;
}

export async function rateTrack(videoId, rating) {
	const response = await fetch("/api/tracks/blah", postOptions({videoId, rating}));
	const data = await response.json();
	return data;
}