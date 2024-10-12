// import NextAuth from "next-auth"
// import Credentials from "next-auth/providers/credentials"
// // import { saltAndHashPassword } from "@/utils/password"
// import { signInSchema } from "./lib/schemas"
// import { getUserByUsername } from "./actions/user-actions"
 
// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       authorize: async (credentials) => {
//         let user = null

//         const { username, password } = await signInSchema.parseAsync(credentials)
 
//         user = await getUserByUsername(username, password)
 
//         if (!user) {
//           throw new Error("User not found.")
//         }
 
//         return user
//       },
//     }),
//   ],
// })