import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
// import { SessionProvider } from "next-auth/react"

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle")
}
// { session, ...pageProps }
function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  
  return (
  // <SessionProvider session={session}>
      <Component {...pageProps} />
    // </SessionProvider>
    )
}

export default MyApp