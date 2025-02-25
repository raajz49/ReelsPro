import { withAuth } from "next-auth/middleware";

import { NextResponse } from "next/server";

export default withAuth(
  function middleware() {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        if (
          pathname.startsWith("api/auth") ||
          pathname.startsWith("/login") ||
          pathname.startsWith("/register")
        ) {
          return true;
        }
        if (pathname === "/" || pathname.startsWith("/api/videos")) {
          return true;
        }
        return !!token;
      },
    },
  }
);


export const config={
    matcher:[
        
    ]
}