// react.js
import React, { useEffect } from "react";

// next.js
import Image from "next/image";

// gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// components
import CardTemplate from "./cardTemplate";
import AnimatedInfoCards from "./animatedInfoCards";
import MobileInfoCards from "./mobileInfoCards";

export default function LandingPage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".infoCard", {
      scrollTrigger: {
        trigger: ".infoCard",
        start: "top " + document.querySelector(".infoCard").offsetTop,
        end: "center center",
        pin: ".hero",
        scrub: 1,
      },
      y: -document.querySelector(".infoCard").offsetTop + 200,
    });
  }, []);

  return (
    <>
      <section
        aria-label="Schedule an Appointment to help your business."
        className="container mx-auto non_phone:max-h-screen hero phone:pb-20"
      >
        <div className="non_phone:min-h-screen flex justify-center items-center phone:justify-center phone:items-start">
          <div className="transform scale-150 phone:scale-100 rounded-full h-72 w-72 phone:h-48 phone:w-48 gradient phone:mt-20 flex flex-col justify-center items-center overflow-visible ">
            <div className="w-84 phone:w-72 text-center leading-snug ">
              <h1 className="text-4xl phone:text-2xl font-bold">
                Bring your business out of the Stone Age
              </h1>
              <p className="text-xl phone:text-base mt-4 font-medium">
                with a modern web experience and marketing campaign anything is
                possible
              </p>
            </div>
          </div>
        </div>
        <MobileInfoCards />
        <AnimatedInfoCards />
      </section>
      {/* <section className="h-screen w-full bg-dark"></section> */}
    </>
  );
}
