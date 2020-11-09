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
      className="bg-dark"
    >
      <div className="container section-default">
        <div>
          <h1 className="section-title text-white">Projects</h1>
          <div className="flex justify-between text-white text-2xl font-bold px-6">
            <h3>Alphacladding</h3>
            <h3 className="tracking-wide">{isGraphic ? "1" : "2"} / 2</h3>
          </div>
          {isGraphic ? <AlphaGraphic /> : <AlphaInfo />}

          <div className="flex items-end justify-end w-full mt-16">
            <div
              className="transform text-6xl text-white inline-block -rotate-45 cursor-pointer"
              onClick={() => setIsGraphic(!isGraphic)}
            >
              <GiStoneSpear />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
