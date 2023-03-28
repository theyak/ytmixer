import { createHash } from "crypto";
import axios from "axios";
import * as utf8 from "utf8";
const YTM_DOMAIN = "https://music.youtube.com";
const YTM_BASE_API = "https://music.youtube.com/youtubei/v1/";
const YTM_QUERY_PARAMS = "?alt=json&key=AIzaSyC9XL3ZjWddXya6X74dJoCTL-WEYFDNX30";
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:111.0) Gecko/20100101 Firefox/111.0";
function getContext() {
  return {
    context: {
      client: {
        clientName: "WEB_REMIX",
        clientVersion: "0.1",
        hl: "en"
      },
      user: {}
    }
  };
}
function getAuthorization(sapisid, origin = "https://music.youtube.com") {
  const sha_1 = createHash("sha1");
  const timestamp = Math.floor(Date.now() / 1e3).toString();
  sha_1.update(utf8.encode(`${timestamp} ${sapisid} ${origin}`));
  const authorization = `SAPISIDHASH ${timestamp}_${sha_1.digest("hex")}`;
  return authorization;
}
function getCookies(cookiesStr) {
  const split = cookiesStr.split(";");
  const cookies = {};
  split.forEach((value) => {
    let [key, val] = value.split("=");
    cookies[key.trim()] = val.trim();
  });
  return cookies;
}
class YtmClient {
  constructor(cookies, user = "0") {
    this.cookies = "";
    this.sapiSid = null;
    this.origin = YTM_DOMAIN;
    const c = getCookies(cookies);
    this.sapiSid = c["__Secure-3PAPISID"] || null;
    this.cookies = cookies;
  }
  async sendAuthorizedRequest(endpoint, body, additional = "") {
    const headers = this.getHeaders();
    const url = `${YTM_BASE_API}${endpoint}${YTM_QUERY_PARAMS}${additional}`;
    const reqBody = JSON.stringify({ ...body, ...getContext() });
    const response = await axios.post(
      url,
      reqBody,
      {
        headers
      }
    );
    return response.data;
  }
  getHeaders() {
    return {
      Origin: this.origin,
      "User-Agent": USER_AGENT,
      Accept: "*/*",
      "Accept-Language": "en-US,en;q=0.5",
      "Content-Type": "application/json",
      "X-Goog-AuthUser": "0",
      "x-origin": this.origin,
      cookie: this.cookies,
      authorization: this.sapiSid ? getAuthorization(this.sapiSid, this.origin) : ""
    };
  }
  /**
   * Retrieves playlists from the authorized user's library.
   */
  async getLibraryPlaylists() {
    let lists = [];
    const body = { browseId: "FEmusic_liked_playlists" };
    const response = await this.sendAuthorizedRequest("browse", body);
    const obj = response.contents?.singleColumnBrowseResultsRenderer?.tabs[0]?.tabRenderer?.content?.sectionListRenderer?.contents[0]?.gridRenderer?.items;
    if (obj && Array.isArray(obj)) {
      obj.shift();
      lists = obj.map((item) => {
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
          id: item?.musicTwoRowItemRenderer?.navigationEndpoint?.browseEndpoint?.browseId,
          name: item?.musicTwoRowItemRenderer?.title?.runs[0]?.text
        };
      });
    }
    return lists;
  }
}
async function getAuth(headers) {
  const cookie = headers.get("x-ytm-cookie");
  const user = headers.get("x-ytm-user");
  const ytma = new YtmClient(cookie, user);
  if (!ytma.sapisid || !ytma.secure3psid || !ytma.secure3papisid)
    ;
  return ytma;
}
export {
  getAuth as g
};
