import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Define public routes that don't require authentication
    const isPublicRoute =
        pathname === '/login' ||
        pathname === '/signup' ||
        pathname.startsWith('/');


    const isAuthenticated = request.cookies.get('auth_session')?.value;

    // If trying to access a protected route without being authenticated
    if (!isPublicRoute && !isAuthenticated) {
        // Redirect to login, but only for page requests (not static files or API if needed)
        if (
            !pathname.startsWith('/_next') &&
            !pathname.includes('.') &&
            !pathname.startsWith('/api')
        ) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    // If already authenticated and trying to access login/signup
    if (isAuthenticated && (pathname === '/login' || pathname === '/signup')) {
        return NextResponse.redirect(new URL('/leads', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
