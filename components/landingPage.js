// react.js
import React, { useEffect } from "react";

// gsap
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// components
import MobileInfoCards from "./mobileInfoCards";

export default function LandingPage() {
  useEffect(() => {}, []);

  return (
    <section
      aria-label="Schedule an Appointment to help your business."
      className="container mx-auto mb-10 text-gray-100"
    >
      <div className="flex justify-center items-center h-72 phone:h-48 mt-20">
        <div className="rounded-full h-72 w-72 phone:h-48 phone:w-48 gradient flex flex-col justify-center items-center overflow-visible ">
          <div className="w-84 phone:w-72 text-center leading-snug ">
            <h1 className="text-4xl phone:text-2xl font-bold">
              Bring your business out of the Stone Age
            </h1>
            <p className="text-xl phone:text-base mt-4 font-semibold">
              with a modern web experience and marketing campaign anything is
              possible
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
