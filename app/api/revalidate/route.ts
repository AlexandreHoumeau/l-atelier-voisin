import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const secret = request.headers.get('x-sanity-secret');
        if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        revalidatePath('/', 'layout');
        
        return NextResponse.json({ message: 'Cache cleared successfully!' });
    } catch {
        return NextResponse.json({ message: 'Error clearing cache' }, { status: 500 });
    }
}
