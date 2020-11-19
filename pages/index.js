// components
import Layout from "../components/templates/layout";
import LandingPage from "../components/IndexSections/landingPage";
import InfoSection from "../components/IndexSections/infoSection";
import AboutSection from "../components/IndexSections/aboutSection";
import ProjectsSection from "../components/IndexSections/projectsSection";

export default function IndexPage() {
  return (
    <Layout a="marketing" b="web" c="both">
      <div className="max-w-screen-1xl bg-landscape bg-top bg-light_burg mx-auto">
        <LandingPage />
        <AboutSection />
        <InfoSection />
        <ProjectsSection />
      </div>
    </Layout>
  );
}
