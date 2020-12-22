import React, { useState } from "react";

// next.js
import Image from "next/image";

// components
import Layout from "../components/templates/layout";
import HeaderSection from "../components/pageSections/headerSection";
import Subsection from "../components/pageSections/subsection";
import Form from "../components/contact/form";

export default function MarketingPage() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Layout
      title="Caveman | Marketing"
      description="Our Marketing Services are for any sized Business that wants to grow their revenue. No matter if the goal is to Gain Leads, Spread the Word, or Gain Clients. Our personalized Marketing Campaign Management that is tailored to your business needs will grow your company effectively. We specialize in Google Advertising Services, Pay Per Click Campaigns, Social Media Marketing, and Local Service Advertising."
    >
      <>
        <HeaderSection
          setShowMenu={setShowMenu}
          bgColor="#9D3A53"
          textColor="text-white"
          title="Our Marekting Services"
          text="With our expertise of small, medium, and large business marketing
          strategies, Caveman Consulting Co. can grow your business with
          campaigns that you can stand behind! With an in-depth analysis of your
          business’s goals and aspirations, we’ll use your vision to craft
          advanced marketing campaigns that engage with the right target
          audience, at the right time, and on the right device. In our minds,
          it’s about knowing just how to spend your budget effectively – not
          quickly."
          btnClass="rounded-lg bg-white text-dark hover:opacity-25 duration-300 cursor-pointer px-8 py-2"
        />
        <div className="relative">
          <Subsection
            sectionClass="bg-tone text-light_burg py-24"
            divClass="max-w-96 mb-10 phone:m-0"
            title="Google Advertising"
            text="Google Ads can be the secret recipe to grow any online or brick and
          mortar business. With Search Ads, Map Ads, Click to Call Ads, plus
          so much more, Caveman Consulting Co. can provide all the coverage
          you need to succeed on Google, which is by far the most popular
          search engine for consumers."
          />
          <div className="absolute flex justify-around h-full w-full items-center bottom-0 lg:justify-center phone:hidden">
            <div className="xl:ml-700 mb-20  w-64 xl:w-88 ">
              <Image
                className=""
                src="/images/marketing_graphic.svg"
                alt="Marketing infographic"
                height="503"
                width="622"
              />
            </div>
          </div>
          <Subsection
            sectionClass="bg-light text-dark py-24"
            divClass="max-w-96 mt-16 phone:m-0"
            title="Social Media Advertising"
            text="Social Media has taken the business world by storm, and having a
          presence on social media is always a vital way to gain traffic
          traction online. With our in-depth analysis of your target audience,
          our Facebook Marketing campaigns will allow you to target the right
          person for your brand. If you are looking to partner with other
          professionals in your industry, our LinkedIn campaigns can be a
          powerful tool to attract professionals in target industries."
          />
        </div>
      </>
      <Form show={showMenu} setShowMenu={setShowMenu} />
    </Layout>
  );
}
