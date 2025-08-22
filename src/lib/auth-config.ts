import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import type { JWT } from "next-auth/jwt"
import type { Session, User, Profile } from "next-auth"
import type { Account } from "next-auth"
import type { AdapterUser } from "@auth/core/adapters"

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        // Call API route to verify credentials
        try {
          const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          })

          if (response.ok) {
            const user = await response.json()
            return user
          }
        } catch (error) {
          console.error("Auth error:", error)
        }
        
        return null
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }: { token: JWT; user?: User }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: async ({ session, token }: { session: Session; token: JWT }) => {
      if (token?.id && session.user) {
        session.user.id = token.id as string
      }
      return session
    },
    signIn: async (params: { 
      user: User | AdapterUser; 
      account?: Account | null | undefined; 
      profile?: Profile | undefined; 
      email?: { verificationRequest?: boolean | undefined } | undefined; 
      credentials?: Record<string, unknown> | undefined 
    }) => {
      const { user, account } = params;
      if (account?.provider === "google") {
        try {
          // Call API to handle Google user registration
          const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/google-user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: user.email,
              name: user.name,
            }),
          })

          if (response.ok) {
            const userData = await response.json()
            user.id = userData.id
            return true
          }
        } catch (error) {
          console.error("Google sign-in error:", error)
        }
      }
      return true
    }
  },
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" as const },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)