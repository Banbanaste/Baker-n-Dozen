// next.js
import Image from "next/image";

// components
import Layout from "../components/templates/layout";
import CardTemplate from "../components/templates/cardTemplate";

// calendy
import ContactButton from "../components/templates/contactButton";

export default function MarketingPage() {
  return (
    <Layout a="home" b="marketing" c="both">
      <section className="section-default bg-dark items-start pt-24 phone:pb-20">
        <div className="fixed bottom-0 right-0 left-0 z-0">
          <Image
            src="/images/wave.svg"
            alt="background waves for design stuffs"
            unsized
          />
        </div>
        <div className="container mx-auto pt-6 space-y-16 flex flex-col justify-center items-center z-10">
          <div className="text-white text-center max-w-96 mx-auto">
            <h1
              className="text-5xl font-bold mb-8"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              Our Web Services
            </h1>
            <p
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              We curate a modern web experience for your end user. We want your
              customers to get the full effect of your branding, product, and
              service wether they be online or in person. We work in web design
              and development to create a website that delivers value to you and
              your customers.
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
              Schdeule a 15 mintue Consultaion Now
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
                classes="max-w-84 w-full mb-8 bg-white text-dark "
                title="E-comerce & Static Solutions"
                info={[
                  "If you have a shopify or wordpress site and are looking for a tune up, or if you're starting from scratch; We will work side by side with you to make sure the platform you use is optimized for your business.",
                  "We can create anything from custom shopify apps, to site speed otimizations.",
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
                title="Custom Solutions"
                info={[
                  "Caveman Consulting Co. works within the Jamstack to create powerful web apps. Apart from the web, we can make anything under the sun with Javascript. Wether it be for web, mobile, or desktop a solution exsits, and is within your reach.",
                ]}
              />
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
}
