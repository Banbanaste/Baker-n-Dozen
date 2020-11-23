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
          content="Caveman Consulting Co is a Digital Marketing and Web Development Agency that specialized in Google Ads, Facebook Ads, Linkedin Ads, and Local Service Ads. Our Web Development services are next to none with an expertise in Lead Generation, Static and Dynamic, E-Commerce, and Shopify websites. We are fully prepared to make an immediate impact on your Business earnings. From Landing Pages to Fully Custom Web experiences that are ready for any business. Schedule a consultation today!"
        ></meta>
      </Head>
      <Nav />
      <MobileNav />
      {children}
    </div>
  );
}
