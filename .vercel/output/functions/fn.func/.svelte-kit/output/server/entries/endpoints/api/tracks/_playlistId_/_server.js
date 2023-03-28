import { g as getAuth } from "../../../../../chunks/ytm.server.js";
async function GET({ request, params }) {
  const ytma = await getAuth(request.headers);
  const tracks = await ytma.getPlaylist(params.playlistId);
  return new Response(JSON.stringify(tracks));
}
async function POST({ request }) {
  const data = await request.json();
  const videoId = data.videoId;
  const rating = data.rating;
  const ytma = await getAuth(request.headers);
  const result = await ytma.rateTrack(videoId, rating);
  return new Response(JSON.stringify(result));
}
export {
  GET,
  POST
};
