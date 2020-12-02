import React, { useEffect } from "react";

// Next.js libraries
import Head from "next/head";

// components
import Nav from "../nav/nav";
import MobileNav from "../nav/mobileNav";

// google analytics
import { logPageView } from "../../utils/analytics";

export default function IndexPage({ title, description, isLanding, children }) {
  useEffect(() => {
    window.GA_INITIALIZED && logPageView();
  }, []);
  return (
    <div data-aos="fade">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <title>{title}</title>
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
      </Head>
      {!isLanding && (
        <>
          <Nav />
          <MobileNav />
        </>
      )}
      {children}
    </div>
  );
}
