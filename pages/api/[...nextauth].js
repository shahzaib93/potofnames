import NextAuth from "next-auth"
import Providers from "next-auth/providers";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code"
      //   }
      // }
    }),
    // ...add more providers here
  ],
  // jwt: {
  //   encryption: true,
  // },
  // secret: process.env.secret
})