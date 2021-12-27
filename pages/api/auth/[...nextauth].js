import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@.com" },
        // email:{lable:"Email" , type="email" ,placeholder:"Email"},
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        console.log("request",req)
        console.log("credentials",credentials)
 
const myuser = {id: 1, name: 'wajahat', email: 'wajahat@gmail.com', pass:"123"}
if(credentials.email == myuser.email && credentials.password == myuser.pass ){
  console.log("Sucessful")
}

else{console.log("Unsucessful")}

        const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
  
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          console.log(user);
          // return user
        } else {
          console.log("Unsucessful")
          // If you return null or false then the credentials will be rejected
          return null
          // You can also Reject this callback with an Error or with a URL:
          // throw new Error('error message') // Redirect to error page
          // throw '/path/to/redirect'        // Redirect to a URL
        }
      }
    })
    // ...add more providers here
  ],
  secret: "H8fm6xRsSw57Usi8pWW2R7FTLPJNZm66PftKRizrMw0="
  // jwt: {
  //   encryption: true,
  // },
  // secret: process.env.secret
})