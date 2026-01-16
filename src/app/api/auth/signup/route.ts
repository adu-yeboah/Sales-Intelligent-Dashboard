import { NextResponse } from 'next/server';
import { findUserByEmail, saveUser, UserData } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { encrypt } from '@/lib/auth';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password, name } = body;

        if (!email || !password || !name) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const existingUser = findUserByEmail(email);
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser: UserData = {
            id: Math.random().toString(36).substring(2, 15),
            email,
            name,
            passwordHash: hashedPassword,
            role: 'user', // Default role
            createdAt: new Date().toISOString(),
            avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`
        };

        saveUser(newUser);

        // Create session
        const session = await encrypt({ id: newUser.id, email: newUser.email, role: newUser.role });
        const cookieStore = await cookies();

        cookieStore.set('auth_session', session, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 // 1 day
        });

        // Return user without sensitive data
        const { passwordHash, ...userWithoutPassword } = newUser;

        return NextResponse.json({
            user: userWithoutPassword,
            message: 'Account created successfully'
        });

    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
