import { g as getAuth } from "../../../../../chunks/ytm.server.js";
async function POST({ request }) {
  let tracks = [];
  const data = await request.json();
  if (data.videoId) {
    tracks.push({ id: data.videoId });
  } else {
    tracks = data.videoIds.map((id) => {
      return { id };
    });
  }
  const ytma = await getAuth(request.headers);
  const result = await ytma.addTracksToPlaylist(data.playlistId, ...tracks);
  return new Response(JSON.stringify(result));
}
export {
  POST
};