import { withAuth } from "next-auth/middleware";
import { authConfig } from "./lib/auth.config";

export default withAuth(authConfig)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};