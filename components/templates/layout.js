// Next.js libraries
import Head from "next/head";

// components
import Nav from "../nav/nav";
import MobileNav from "../nav/mobileNav";

export default function IndexPage({ children, a, b, c }) {
  return (
    <div className="" data-aos="fade">
      <Head>
        <title>Caveman Consulting Co.</title>
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
      <Nav a={a} b={b} c={c} />
      <MobileNav a={a} b={b} c={c} />
      {children}
    </div>
  );
}
