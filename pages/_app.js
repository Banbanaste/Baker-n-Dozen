import React, { useEffect } from "react";

import "../styles/index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { initGA } from "../utils/analytics";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    console.log("check initialized value", window.GA_INITIALIZED);
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
