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
      className="bg-dark min-h-screen"
      id="projects"
      style={{ border: "solid 1px red" }}
    >
      <div
        className="container mx-auto flex justify-center items-center pt-20"
        style={{ border: "solid 1px red" }}
      >
        <div className="" style={{ border: "solid 1px red" }}>
          <h1 className="section-title text-white">Projects</h1>
          <div className="flex justify-between text-white text-2xl font-bold px-6">
            <h3>Alphacladding</h3>
            <h3 className="tracking-wide">{isGraphic ? "1" : "2"} / 2</h3>
          </div>
          {isGraphic ? <AlphaGraphic /> : <AlphaInfo />}
        </div>
      </div>
      <div
        className="container mx-auto flex items-end justify-end w-full phone:w-11/12  phone:pb-24"
        style={{ border: "solid 1px red" }}
      >
        <div
          className="transform text-6xl phone:text-5xl text-white inline-block -rotate-45 cursor-pointer"
          onClick={() => setIsGraphic(!isGraphic)}
        >
          <GiStoneSpear />
        </div>
      </div>
    </section>
  );
}
