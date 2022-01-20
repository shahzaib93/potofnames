import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { faLess } from "@fortawesome/free-brands-svg-icons";
import Modal from "react-modal";

 
const customStyles = {
  content: {
    margin: "0%",
    width: "30%",
    height: "30%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",

    // marginRight: '-50%',
    transform: "translate(-50%, -50%)",
  },
};

// function openModal() {
//   // setsoundplay(false);
//   setIsOpen(true);
// }

// function closeModal() {
//   setIsOpen(false);
// }



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
          response_type: "code",
        },
      },
    }),

    
    // CredentialsProvider({
    //   // The name to display on the sign in form (e.g. 'Sign in with...')
    //   name: "Credentials",
    //   // The credentials is used to generate a suitable form on the sign in page.
    //   // You can specify whatever fields you are expecting to be submitted.
    //   // e.g. domain, username, password, 2FA token, etc.
    //   // You can pass any HTML attribute to the <input> tag through the object.
    //   credentials: {
    //     email: { label: "Email", type: "text", placeholder: "email@.com" },
    //     // email:{lable:"Email" , type="email" ,placeholder:"Email"},
    //     password: { label: "Password", type: "password" },
    //   },

    //   async authorize(credentials, req) {

    //     //FOR POST
    //     // const res = await fetch("https://potofnames.com/api/users", {
    //     //   body: JSON.stringify({
    //     //     email: "Wajahat@gmail.com",
    //     //     password: "123",
    //     //   }),
    //     //   headers: { "Content-Type": "application/json" },
    //     //   method: "POST",
    //     // });

        
    //     // Add logic here to look up the user from the credentials supplied
    //     console.log("request", req);
    //     console.log("credentials", credentials);
    //       var user;
    //       await fetch("https://potofnames.com/api/users").then((response)=>response.json()).then((AllUsers)=>{
    //     console.log("ALLLLL",AllUsers)
    //     for(var i =0 ; i<AllUsers.length;i++){
    //           if (AllUsers[i].email  == credentials.email){
    //             if(AllUsers[i].password == credentials.password){
    //             console.log("Successful")
    //             user = AllUsers[i]
    //             break      
    //           }
    //             else{
    //               console.log("enter correct password")
    //               break
    //             }
    //           }
    //           else{
    //             console.log("First Signup")
    //             alert("SIGNUP FISRT")
    //           }
    //     }
    //     // const newUser = await res.json();
    //     // console.log("MYUSER", newUser);
    //   })

    //     if (user) {
    //       // Any object returned will be saved in `user` property of the JWT
    //       console.log(user);
    //       return user
    //     } else {
    //       console.log("Unsucessful");
    //       // <signupmodal/>
    //       // If you return null or false then the credentials will be rejected
    //       // return null;
    //       // You can also Reject this callback with an Error or with a URL:
    //       // throw new Error('error message') // Redirect to error page
    //       // throw '/path/to/redirect'        // Redirect to a URL
    //     }
    //   },
    // }),
    // ...add more providers here
  ],
  secret: "H8fm6xRsSw57Usi8pWW2R7FTLPJNZm66PftKRizrMw0=",
  // jwt: {
  //   encryption: true,
  // },
  // secret: process.env.secret
});
