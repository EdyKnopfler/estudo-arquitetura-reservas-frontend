import { NextAuthMiddlewareOptions } from 'next-auth/middleware';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ req: { nextUrl }, token }) {
      console.log('acessando', nextUrl.pathname)
      console.log('com', token)
      return (
        !!token ||
        nextUrl.pathname === '/' ||
        nextUrl.pathname === '/login'
      )
    },
  },
} satisfies NextAuthMiddlewareOptions  