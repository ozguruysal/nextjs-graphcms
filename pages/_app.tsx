import splitbee from "@splitbee/web";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    splitbee.init({
      scriptUrl: "/bee.js",
      apiUrl: "/_hive",
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
