import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs"; // assuming passwords are hashed

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Find user by username
        const user = await prisma.user.findUnique({
          where: { email: credentials?.username },
        });

        if (user && credentials?.password) {
          // Compare the entered password with the stored hashed password
          const isValidPassword = await compare(credentials.password, user.password);
          if (isValidPassword) {
            return { id: user.id, name: user.name, email: user.email };
          }
        }
        return null; // Return null if the credentials are invalid
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      //@ts-ignore
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
});
