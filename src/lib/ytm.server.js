// import YouTubeMusic from 'youtube-music-ts-api';
import { YtmClient } from "$lib/ytmclient";

// import YouTubeMusic from "/Users/larbear/p/ytmusic/index";
export async function getAuth(headers) {
	const cookie = headers.get("x-ytm-cookie");
	const user = headers.get("x-ytm-user");

	const ytma = new YtmClient(cookie, user);
	console.log(ytma);
	// const ytm = new YouTubeMusic();
	// const ytma = await ytm.authenticate(cookie, user);

	if (!ytma.sapiSid) {
		throw new Error("Invalid cookie value.");
	}

	return ytma;
}
