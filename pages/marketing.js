// next.js
import Image from "next/image";

// components
import Layout from "../components/templates/layout";
import CardTemplate from "../components/templates/cardTemplate";

// calendy
import ContactButton from "../components/templates/contactButton";

export default function MarketingPage() {
  return (
    <Layout
      title="Caveman | Marketing"
      description="Our Marketing Services are for any sized Business that wants to grow their revenue. No matter if the goal is to Gain Leads, Spread the Word, or Gain Clients. Our personalized Marketing Campaign Management that is tailored to your business needs will grow your company effectively. We specialize in Google Advertising Services, Pay Per Click Campaigns, Social Media Marketing, and Local Service Advertising."
    >
      <section className="section-default bg-burg items-start pt-24 phone:pb-20">
        <div className="fixed bottom-0 right-0 left-0 z-0">
          <Image
            src="/images/wave.svg"
            alt="background waves for design stuffs"
            unsized
          />
        </div>
        <div className="container mx-auto pt-6 space-y-16 flex flex-col justify-center items-center z-20">
          <div className="text-white text-center max-w-96 mx-auto">
            <h1
              className="text-5xl font-bold mb-8"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              Our Marekting Services
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              With our expertise of small, medium, and large business marketing
              strategies, Caveman Consulting Co. can grow your business with
              campaigns that you can stand behind! With an in-depth analysis of
              your business’s goals and aspirations, we’ll use your vision to
              craft advanced marketing campaigns that engage with the right
              target audience, at the right time, and on the right device. In
              our minds, it’s about knowing just how to spend your budget
              effectively – not quickly.
            </p>
          </div>
          <span
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <ContactButton classes="rounded-lg bg-white hover:opacity-25 duration-300 cursor-pointer px-8 py-2 ">
              Schedule a 15 mintue Consultaion Now
            </ContactButton>
          </span>
          <div className="flex flex-wrap justify-around w-full">
            <span
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <CardTemplate
                classes="max-w-84 w-full mb-8 bg-white text-dark"
                title="Google Advertising"
                info={[
                  "Google Ads can be the secret recipe to grow any online or brick and mortar business. With Search Ads, Map Ads, Click to Call Ads, plus so much more, Caveman Consulting Co. can provide all the coverage you need to succeed on Google, which is by far the most popular search engine for consumers.",
                ]}
              />
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <CardTemplate
                classes="max-w-84 w-full mb-8 bg-white text-dark"
                title="Social Media Advertising"
                info={[
                  "Social Media has taken the business world by storm, and having a presence on social media is always a vital way to gain traffic traction online. With our in-depth analysis of your target audience, our Facebook Marketing campaigns will allow you to target the right person for your brand. If you are looking to partner with other professionals in your industry, our LinkedIn campaigns can be a powerful tool to attract professionals in target industries.",
                ]}
              />
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
