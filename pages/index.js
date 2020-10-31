// Next.js libraries
import Head from 'next/head'

// components
import Nav from '../components/nav'
import LandingPage from "../components/landingPage"
import InfoSection from "../components/infoSection"

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>
          Baker & Dozen
        </title>
      </Head>
      <Nav />
      <LandingPage />
      <InfoSection />
    </>
  )
}
