import { auth } from "@/auth";

export default auth((req) => {
    const isLoggedIn = !!req.auth;
    const isAuthPage = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/signup");
    const isPublicPage = req.nextUrl.pathname === "/";

    if (isAuthPage) {
        if (isLoggedIn) {
            return Response.redirect(new URL("/leads", req.nextUrl));
        }
        return;
    }

    if (!isLoggedIn && !isPublicPage) {
        return Response.redirect(new URL("/login", req.nextUrl));
    }
});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
