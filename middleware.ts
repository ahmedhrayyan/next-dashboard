import { NextRequest, NextResponse } from "next/server";

import { verifySession } from "@/lib/dal";

// 1. Specify protected and public routes
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is public
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Get the session data
  const session = await verifySession();

  // 4. Redirect to /login if the user is not authenticated otherwise return the session data
  if (!isPublicRoute && !session.isAuth) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // 5. Redirect to / if the user is authenticated
  if (isPublicRoute && session.isAuth) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
