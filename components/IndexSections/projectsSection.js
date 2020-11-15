// react
import React, { useEffect, useState } from "react";

// icons
import { GiStoneSpear } from "react-icons/gi";

// components
import AlphaInfo from "../reduceClutter/alphaInfo";
import AlphaGraphic from "../reduceClutter/alphaGraphic";

export default function ProjectSection() {
  const [isGraphic, setIsGraphic] = useState(true);

  return (
    <section
      aria-label="Schedule an Appointment to help your business."
      className="bg-dark min-h-screen pb-20"
      id="projects"
    >
      <div className="container mx-auto flex justify-center items-start pt-20">
        <div className="w-full">
          <h1
            className="section-title text-white"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            Projects
          </h1>
          <div className="bg-burg pb-16 h-96 ">
            <div className="flex w-full justify-between items-center text-white text-2xl phone:text-lg font-bold pt-4 px-6">
              <h3
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                Alphacladding
              </h3>
              <span
                className="flex items-center "
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                <h3 className="tracking-wide mr-6">
                  {isGraphic ? "1" : "2"} / 2
                </h3>
                <div
                  className="transform text-5xl phone:text-3xl text-white inline-block -rotate-45 cursor-pointer"
                  onClick={() => setIsGraphic(!isGraphic)}
                >
                  <GiStoneSpear />
                </div>
              </span>
            </div>
            <div className="pt-8 phone:pt-4 flex justify-center items-start">
              {isGraphic ? <AlphaGraphic /> : <AlphaInfo />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
