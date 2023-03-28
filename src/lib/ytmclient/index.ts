import { createHash } from "crypto";
import axios from "axios";

export const YTM_DOMAIN = "https://music.youtube.com";
export const YTM_BASE_API = "https://music.youtube.com/youtubei/v1/";
export const YTM_QUERY_PARAMS = "?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30"
export const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:111.0) Gecko/20100101 Firefox/111.0";

export function getContext(): any {
	return {
		context: {
			client: {
				clientName: "WEB_REMIX",
				clientVersion: "0.1",
				hl: "en",
			},
			user: {},
		}
	}
};

export function getAuthorization(sapisid: string, origin: string = "https://music.youtube.com"): string {
	const sha_1 = createHash('sha1');
	const timestamp = Math.floor(Date.now() / 1000).toString();
	sha_1.update(`${timestamp} ${sapisid} ${origin}`);
	const authorization = `SAPISIDHASH ${timestamp}_${sha_1.digest("hex")}`;
	return authorization;
}

export function getCookies(cookiesStr: string): Record<string, string> {
	const split: string[] = cookiesStr.split(";")

	const cookies:Record<string, string> = {};
	split.forEach((value) => {
		let [key, val] = value.split("=");
		cookies[key.trim()] = val.trim();
	});

	return cookies;
}


export class YtmClient {
	cookies:string = "";
	sapiSid:string|null = null;
	origin:string = YTM_DOMAIN;

	constructor(cookies: string, user: string = "0") {
		const c = getCookies(cookies);
		this.sapiSid = c["__Secure-3PAPISID"] || null;
		this.cookies = cookies;
	}

	async sendAuthorizedRequest(endpoint: string, body: Record<string, any>, additional:string = ""): Promise<any> {
		const headers = this.getHeaders();
		const url = `${YTM_BASE_API}${endpoint}${YTM_QUERY_PARAMS}${additional}`;
		const reqBody = JSON.stringify({...body, ...getContext()});

		const response = await axios.post(
			url,
			reqBody,
			{
				headers,
			}
		);

		return response.data;
	}

	getHeaders(): Record<string, string> {
		return {
			Origin: this.origin,
			'User-Agent': USER_AGENT,
			Accept: '*/*',
			'Accept-Language': 'en-US,en;q=0.5',
			'Content-Type': 'application/json',
			'X-Goog-AuthUser': '0',
			'x-origin': this.origin,
			cookie: this.cookies,
			authorization: this.sapiSid ? getAuthorization(this.sapiSid, this.origin) : "",
		};
	}

	/**
	 * Retrieves playlists from the authorized user's library.
	 */
	async getLibraryPlaylists(): Promise<IPlaylist[]> {
		let lists:IPlaylist[] = [];
		const body = { browseId: "FEmusic_liked_playlists" };
		const response = await this.sendAuthorizedRequest("browse", body);
		const obj = response.
			contents?.
			singleColumnBrowseResultsRenderer?.
			tabs[0]?.
			tabRenderer?.
			content?.
			sectionListRenderer?.
			contents[0]?.
			gridRenderer?.
			items;
		if (obj && Array.isArray(obj)) {
			// First item is new playlist, skip it.
			obj.shift();

			lists = obj.map((item) => {
				// Look for count of songs which is provided via a label like "6 songs".
				let count = 0;
				const subtitles = item?.musicTwoRowItemRenderer?.subtitle?.runs;
				if (Array.isArray(subtitles)) {
					for (let i = 0; i < subtitles.length; i++) {
						const text = subtitles[i].text.trim();
						const match = text.match(/^([\d,]+)\s+\w+/);
						if (match && match.length > 1) {
							count = match[1];
							break;
						}
					}
				}

				return {
					playlistId: item?.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId,
					title: item?.musicTwoRowItemRenderer?.title?.runs[0]?.text,
					thumbnails: item?.musicTwoRowItemRenderer?.thumbnailRenderer?.musicThumbnailRenderer?.thumbnail?.thumbnails,
					count,
				};
			});
		}

		return lists;
	}
}

type IPlaylist = {
	playlistId: string,
	title: string,
	thumbnails?: IThumbnails[],
	count?: number,
};

type IThumbnails = {
	url: string;
	width: number;
	height: number;
}