// react.js
import React, { useEffect } from "react";

// next.js
import Image from "next/image";

// gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// components
import CardTemplate from "./cardTemplate";

export default function LandingPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".infoCard", {
      scrollTrigger: {
        trigger: ".infoCard",
        start: "top " + document.querySelector(".infoCard").offsetTop,
        end: "+=75px",
        pin: ".hero",
        scrub: 1,
      },
      y: -250,
    });
  }, []);

  return (
    <>
      <section
        aria-label="Schedule an Appointment to help your business."
        className="container mx-auto max-h-screen pt-32 hero"
      >
        <div className="transform scale-125 rounded-full h-72 w-72 gradient mx-auto flex flex-col justify-center items-center overflow-visible ">
          <div className="w-84 text-center leading-snug ">
            <h1 className="text-4xl font-bold">
              Bring your business out of the Stone Age
            </h1>
            <p className="text-xl mt-4 font-medium">
              with a modern web experience and marketing campaign anything is
              possible
            </p>
          </div>
        </div>

        <div className="flex justify-around items-start mt-16">
          <CardTemplate
            classes="infoCard"
            title="Marketing"
            info={[
              "Trying to attreact more clients to grow revenue? Our marketing plans are the perfect option for you. Fromn Google Advertising to Social Media, we can grow your book of business in as little as 60 days.",
            ]}
          >
            <div className="flex flex-col items-center justify-between h-64 my-6">
              <Image
                src="/images/google.png"
                alt="Google logo"
                width={100}
                height={30}
              />
              <Image
                src="/images/facebook.png"
                alt="Facebook logo"
                width={120}
                height={23}
              />
              <Image
                src="/images/instagram.png"
                alt="Instagram logo"
                width={110}
                height={35}
              />
              <Image
                src="/images/linkedin.png"
                alt="LinkedIn logo"
                width={110}
                height={27}
              />

              <Image
                src="/images/twitter.png"
                alt="Twitter logo"
                width={100}
                height={20}
              />
              <Image
                src="/images/reddit.png"
                alt="Reddit logo"
                width={70}
                height={20}
              />
            </div>
          </CardTemplate>
          <CardTemplate
            classes="transform translate-y-64 infoCard"
            title="Web"
            info={[
              "We design, develop, deploy, and maintain web experiences so you can focus on growing your business. We create websites that will accomplish your goals, and increase your brand value.",
              "We want your business to seemlesly flow throughout its various touch points on the internet. A website is crucial to any business, and with the right web presentation a business can thrive.",
            ]}
          >
            <div className="flex flex-wrap items-center justify-between my-2 px-4">
              <div className="h-16 w-auto my-4 ">
                <Image
                  layout="fill"
                  src="/images/js.png"
                  alt="Javascript logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="h-16 w-auto my-4">
                <Image
                  layout="fill"
                  src="/images/aws.png"
                  alt="AWS logo"
                  width={70}
                  height={50}
                />
              </div>
              <div className="h-16 w-auto my-4">
                <Image
                  layout="fill"
                  src="/images/react.png"
                  alt="React logo"
                  width={55}
                  height={50}
                />
              </div>
              <div className="h-16 w-auto my-4">
                <Image
                  layout="fill"
                  src="/images/gql.png"
                  alt="GraphQL logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="h-16 w-auto my-4 self-end">
                <Image
                  layout="fill"
                  src="/images/dm.png"
                  alt="Designmodo logo"
                  width={120}
                  height={25}
                />
              </div>
              <div className="h-16 w-auto my-4">
                <Image
                  layout="fill"
                  src="/images/shopify.png"
                  alt="Shopify logo"
                  width={120}
                  height={30}
                />
              </div>
            </div>
          </CardTemplate>
        </div>
      </section>
      {/* <section className="h-screen w-full bg-dark"></section> */}
    </>
  );
}
