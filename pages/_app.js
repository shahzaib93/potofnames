import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from 'next-themes'
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle")
}

function MyApp({ Component, pageProps:{ session, ...pageProps }}) {
  
  return (
      <SessionProvider session={session}>
        <ThemeProvider>
        <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    )
}

export default MyApp