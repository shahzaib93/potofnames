import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react";
import { AppWrapper } from "../context/AppContext";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap.bundle")
}

function MyApp({ Component, pageProps:{ session, ...pageProps }}) {
  
  return (
    <AppWrapper>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AppWrapper>
    
    )
}

export default MyApp