import { NextResponse } from "next/server"

export async function GET(
    request: Request,
    { params }: { params: { slug: string } }
) {
    // ici tu peux logguer plus tard si tu veux
    return NextResponse.redirect(new URL("/", request.url))
}
