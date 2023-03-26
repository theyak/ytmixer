import YouTubeMusic from "youtube-music-ts-api";

export async function getAuth(headers) {
	const cookie = headers.get("x-ytm-cookie");
	const user = headers.get("x-ytm-user");
	const ytm = new YouTubeMusic();
	const ytma = await ytm.authenticate(cookie, user);

	if (!ytma.sapisid || !ytma.secure3psid || !ytma.secure3papisid) {
		throw new Error("Invalid cookie value.");
	}

	return ytma;
}
