// components
import Layout from "../components/templates/layout";
import LandingPage from "../components/IndexSections/landingPage";
import InfoSection from "../components/IndexSections/infoSection";
import ProjectsSection from "../components/IndexSections/projectsSection";

export default function IndexPage() {
  return (
    <Layout a="marketing" b="web" c="both">
      <LandingPage />
      <InfoSection />
      <ProjectsSection />
    </Layout>
  );
}
