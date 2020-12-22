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
      title="Caveman | Web Development"
      description="Our Web Development Services include all the dynamics needed to run your business online. For any E-Comm, Service Provider, Consulting, or Small Business our websites will display your business in an elegant professional way that will blow your customers and clients away! We specialize in Jamstack, Landing Pages, CMS, Next.js, Gatsby.js, React.js, Javascript, AWS, E-commerce, Shopify, Big Commerce, Static, Responsive, Dynamic, Server Side Rendering, Static Site Generator."
    >
      <>
        <HeaderSection
          setShowMenu={setShowMenu}
          bgColor="#FAFAFA"
          textColor="text-dark"
          btnClass="rounded-lg bg-dark text-white hover:opacity-25 duration-300 cursor-pointer px-8 py-2"
          title="Our Web Services"
          text="We curate a modern web experience for your end user. We want your
              customers to get the full effect of your branding, product, and
              services, whether they be online or in person. We work in web
              design and development to create a website that delivers value to
              you and your customers."
        />

        <div className="relative">
          <Subsection
            sectionClass="text-light bg-light_burg py-24"
            divClass="max-w-96 mx-auto text-center mb-16 phone:mb-0"
            title="E-comerce & Static Solutions"
            text="If you have a Shopify or WordPress site and are looking for a
          tune up, or if you're starting from scratch, our team will work
          side by side with you to make sure the platform you use is
          optimized for your business. We can create anything from site speed optimizations to Shopify
          apps."
          />

          <div className="absolute flex justify-around h-full w-full items-center bottom-0 lg:justify-center ">
            <div className="phone:w-72 phone:-mb-20">
              <Image
                className=""
                src="/images/web_graphic.svg"
                alt="Marketing infographic"
                height="171"
                width="613"
              />
            </div>
          </div>
          <Subsection
            sectionClass="bg-tone text-dark py-24"
            divClass="max-w-96 mx-auto text-center mt-16 phone:mt-0"
            title="Custom Solutions"
            text="Caveman Consulting Co. works within the Jamstack to create
          powerful web applications. Apart from the web, we can make
          anything under the sun with Javascript. Whether it be for web,
          mobile, or desktop a solution exists, and is within your reach."
          />
        </div>
      </>
      <Form show={showMenu} setShowMenu={setShowMenu} />
    </Layout>
  );
}
