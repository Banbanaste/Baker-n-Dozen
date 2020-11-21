import React, { useEffect } from "react";

// Next.js libraries
import Head from "next/head";

// components
import Nav from "../nav/nav";
import MobileNav from "../nav/mobileNav";

// google analytics
import { logPageView } from "../../utils/analytics";

export default function IndexPage({ children }) {
  useEffect(() => {
    window.GA_INITIALIZED && logPageView();
  }, []);
  return (
    <div className="" data-aos="fade">
      <Head>
        <title>Caveman Consulting Co.</title>
        <link rel="shortcut icon" href="/images/logo_icon.ico" />
        <link
          rel="preload"
          href="/fonts/Futura/Futura-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Futura/Futura-Heavy.ttf"
          as="font"
          crossOrigin=""
        />
        <meta
          name="Description"
          content="Caveman Consulting Co. is a Web Development and Marketing company. We help businesses curate online experiences and sales funnels that help them increse their book of business."
        ></meta>
      </Head>
      <Nav />
      <MobileNav />
      {children}
    </div>
  );
}
