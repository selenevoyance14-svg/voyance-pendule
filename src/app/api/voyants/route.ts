import { NextResponse } from "next/server";

export const revalidate = 300;

export async function GET() {
  const apiKey = process.env.MSV_AFFILIATE_API_KEY;
  if (!apiKey) return NextResponse.json([], { status: 200 });

  const endpoint = new URL("https://www.webangelis.fr/api_msvaff.php");
  endpoint.searchParams.set("key", apiKey);
  endpoint.searchParams.set("tpe", "1");
  endpoint.searchParams.set("nbr", "4");

  try {
    const response = await fetch(endpoint, { next: { revalidate: 300 } });
    if (!response.ok) return NextResponse.json([], { status: 200 });
    const data = await response.json();
    return NextResponse.json(Array.isArray(data) ? data : []);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}
