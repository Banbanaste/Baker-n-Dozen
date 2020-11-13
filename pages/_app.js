import React, { useEffect } from "react";

import "../styles/index.css";

import AOS from "aos";
import "aos/dist/aos.css";

import { initGA, logPageView } from "../utils/analytics";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
