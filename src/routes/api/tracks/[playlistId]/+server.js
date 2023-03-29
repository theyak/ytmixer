import {getAuth} from "$lib/ytm.server";

/** @type {import('./$types').RequestHandler} */
export async function GET({request, params}) {
	const ytma = await getAuth(request.headers);

	const tracks = await ytma.getPlaylist(params.playlistId);

	return new Response(JSON.stringify({tracks}));
}

/** @type {import('./$types').RequestHandler} */
export async function POST({request}) {
	const data = await request.json();
	const videoId = data.videoId;
	const rating = data.rating;

	const ytma = await getAuth(request.headers);
	const result = await ytma.rateTrack(videoId, rating);

	return new Response(JSON.stringify(result));
}
