// components
import Layout from "../components/templates/layout";
import LandingPage from "../components/IndexSections/landingPage";
import InfoSection from "../components/IndexSections/infoSection";
import AboutSection from "../components/IndexSections/aboutSection";
import ProjectsSection from "../components/IndexSections/projectsSection";

export default function IndexPage() {
  return (
    <Layout
      title="Caveman Consulting Co."
      description="Caveman Consulting Co is a Digital Marketing and Web Development Agency that specialized in Google Ads, Facebook Ads, Linkedin Ads, and Local Service Ads. Our Web Development services are next to none with an expertise in Lead Generation, Static and Dynamic, E-Commerce, and Shopify websites. We are fully prepared to make an immediate impact on your Business earnings. From Landing Pages to Fully Custom Web experiences that are ready for any business. Schedule a consultation today!"
    >
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
