// Next.js libraries
import Head from "next/head";

// components
import Nav from "../components/nav";
import BottomNav from "../components/bottomNav";
import LandingPage from "../components/landingPage";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Caveman Consulting Co.</title>
      </Head>
      <Nav />
      <BottomNav />
      <LandingPage />
    </>
  );
}
