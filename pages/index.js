// components
import Layout from "../components/templates/layout";
import LandingPage from "../components/IndexSections/landingPage";
import InfoSection from "../components/IndexSections/infoSection";
import AboutSection from "../components/IndexSections/aboutSection";
import ProjectsSection from "../components/IndexSections/projectsSection";

export default function IndexPage() {
  return (
    <Layout a="marketing" b="web" c="both">
      <div
        className="bg-landscape bg-center bg-light_burg mx-auto bg-no-repeat"
        style={{ backgroundPositionY: "-140px", backgroundPositionX: "-340px" }}
      >
        <LandingPage />
        <AboutSection />
        <InfoSection />
        <ProjectsSection />
      </div>
    </Layout>
  );
}
