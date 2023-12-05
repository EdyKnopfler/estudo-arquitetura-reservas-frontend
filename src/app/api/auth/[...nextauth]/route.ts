import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { revalidatePath } from "next/cache";
import { autenticarNoBackend } from "./auth-service";

const nextAuthOptions: NextAuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',

      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },

      async authorize(credentials) {
        console.log('logando com', {...credentials, password: '******' })

        revalidatePath('/', 'layout')

        return await autenticarNoBackend(
          credentials!.email, credentials!.password)
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }