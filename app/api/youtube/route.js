// app/api/youtube/route.js
export async function GET() {
  const API_KEY = process.env.YT_API_KEY;

  const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();

  return Response.json(data);
}
