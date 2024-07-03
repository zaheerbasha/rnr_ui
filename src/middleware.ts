import { NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";
import { decode } from 'next-auth/jwt';
import { UserSession } from "@/types/userSession";
import { getServerSession } from "next-auth";

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    if(!req.nextauth.token){
      return NextResponse.rewrite(new URL(`/access_denied`, req.url));
    }

    console.log(req.nextauth.token.name, req.nextauth.token.email);
    if (!req.nextauth.token.email?.endsWith(process.env.COMPANY_HOSTED_DOMAIN!)) {
      return NextResponse.rewrite(new URL('/access_denied', req.url));
    }

    const response = NextResponse.next()
    return response;
  },
  // This callbacks is used to explicitly logout the user if details not available
  {
    callbacks: {
      authorized: async ({ req, token }) => {
        const decodedSession : UserSession | null = await decode({
          token: req.cookies.get(`${process.env.NODE_ENV === 'production' ? '__Secure-': ""}next-auth.session-token`)?.value,
          secret: process.env.NEXTAUTH_SECRET!,
        });
        if (!token || !decodedSession) return false;
        return true
      }
    }
  }
)
export const config = { matcher: [
  '/((?!api|_next/static|_next/image|favicon.ico).*)',
], }