import NextAuth, { NextAuthConfig } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthConfig = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'E-mail', type: 'text' },
        senha: { label: 'Senha', type: 'text' },
      },
      async authorize(credentials, request) {
        /*
        const response = await fetch(
          `${process.env.BACKEND_URL}/usuarios/autenticar`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: credentials.email, 
              password: credentials.senha, 
            }),
          }
        );

        const user = await response.json()
        */

        const user = { id: '1', name: 'Kânia', email: 'kania@gato.com' }

        return user /* && response.ok */ ? user : null
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }