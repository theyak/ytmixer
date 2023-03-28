import { g as getAuth } from "../../../../../chunks/ytm.server.js";
async function POST({ request }) {
  const data = await request.json();
  const ytma = await getAuth(request.headers);
  const result = await ytma.createPlaylist(data.title);
  return new Response(JSON.stringify(result));
}
export {
  POST
};
