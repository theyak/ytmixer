import { g as getAuth } from "../../../../chunks/ytm.server.js";
async function GET({ request }) {
  try {
    const ytma = await getAuth(request.headers);
    const playlists = await ytma.getLibraryPlaylists();
    return new Response(JSON.stringify(playlists));
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }));
  }
}
export {
  GET
};
