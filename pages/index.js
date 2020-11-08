// components
import Layout from "../components/layout";
import LandingPage from "../components/landingPage";
import MobileInfoCard from "../components/mobileInfoCards";

export default function IndexPage() {
  return (
    <Layout a="marketing" b="web" c="both">
      <LandingPage />
      <MobileInfoCard />
    </Layout>
  );
}
