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
          <h1 className="section-title text-white">Projects</h1>
          <div className="flex w-full justify-between items-center text-white text-2xl font-bold px-6">
            <h3>Alphacladding</h3>
            <span className="flex items-center">
              <h3 className="tracking-wide mr-10">
                {isGraphic ? "1" : "2"} / 2
              </h3>
              <div
                className="transform text-6xl phone:text-5xl text-white inline-block -rotate-45 cursor-pointer"
                onClick={() => setIsGraphic(!isGraphic)}
              >
                <GiStoneSpear />
              </div>
            </span>
          </div>
          {isGraphic ? <AlphaGraphic /> : <AlphaInfo />}
        </div>
      </div>
    </section>
  );
}
