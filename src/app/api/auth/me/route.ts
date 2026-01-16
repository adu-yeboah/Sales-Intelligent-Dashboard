import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth';
import { findUserById } from '@/lib/db';

export async function GET() {
    const session = await getSession();

    if (!session) {
        return NextResponse.json({ user: null });
    }

    const user = findUserById(session.id);
    if (!user) {
        return NextResponse.json({ user: null });
    }

    const { passwordHash, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword });
}
