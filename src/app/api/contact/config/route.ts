import { NextResponse } from "next/server";

/** Public Web3Forms key for browser submit (key is safe to expose per Web3Forms docs). */
export async function GET() {
  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY?.trim() ||
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ||
    "";

  if (!accessKey) {
    return NextResponse.json({ configured: false });
  }

  return NextResponse.json({ configured: true, accessKey });
}
