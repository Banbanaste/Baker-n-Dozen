// next.js
import Link from "next/link";
import Image from "next/image";

// components
import CardTemplate from "../templates/cardTemplate";
import MarketingCardImg from "../reduceClutter/marketingCardImg";
import WebCardImg from "../reduceClutter/webCardImg";

// google analytics
import { logEvent } from "../../utils/analytics";

// icons
import {
  GrGoogle,
  GrFacebook,
  GrInstagram,
  GrReactjs,
  GrGraphQl,
  GrLinkedin,
} from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { FaAws, FaShopify, FaLinkedinIn } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function AnimatedInfoCards() {
  return (
    <section className="relative" id="about" data-aos="fade">
      <div className="section-default flex-col py-32">
        <div className="max-w-96 text-light">
          <h1 className="section-title mb-10 phone:mb-4 phone:text-3xl">
            What We Do
          </h1>
          <Link href="/marketing">
            <div className="text-2xl phone:text-xl mb-10 cursor-pointer hover:underline">
              <h2 className="uppercase text-3xl phone:text-2xl font-bold mb-4 underline">
                Marketing
              </h2>
              <p>
                Trying to attract more clients to grow revenue? Our marketing
                plans are the perfect option for you. Fromn Google Advertising
                to Social Media, we can grow your book of business in as little
                as 60 days.
              </p>
            </div>
          </Link>

          <div className="max-w-96 text-white flex justify-start text-4xl mx-auto flex-wrap my-10">
            <div className="opacity-50 hover:opacity-100  duration-300 duration-300 m-4">
              <a href="https://ads.google.com/home/" target="_blank">
                <GrGoogle />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100  duration-300 m-4">
              <a target="_blank" href="https://graphql.org/">
                <GrGraphQl />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100  duration-300 m-4">
              <a
                target="_blank"
                href="https://business.linkedin.com/marketing-solutions"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100  duration-300 m-4">
              <a target="_blank" href="https://www.shopify.com/">
                <FaShopify />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100  duration-300 m-4">
              <a target="_blank" href="https://www.facebook.com/business">
                <GrFacebook />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100  duration-300 m-4">
              <a target="_blank" href="https://reactjs.org/">
                <GrReactjs />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100  duration-300 m-4">
              <a target="_blank" href="https://business.instagram.com/">
                <GrInstagram />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100  duration-300 m-4">
              <a target="_blank" href="https://tailwindcss.com/">
                <SiTailwindcss />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100  duration-300 m-4">
              <a target="_blank" href="https://aws.amazon.com/">
                <FaAws />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100  duration-300 m-4">
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              >
                <IoLogoJavascript />
              </a>
            </div>
          </div>
          <Link href="/web">
            <div className="text-2xl phone:text-xl cursor-pointer hover:underline">
              <h2 className="uppercase text-3xl phone:text-2xl font-bold mb-4 underline">
                Web Development
              </h2>
              <p className="mb-6">
                We design, develop, deploy, and maintain web experiences so you
                can focus on growing your business. We create websites that will
                accomplish your goals, and increase your brand value.
              </p>
              <p>
                We want your business to seemlesly flow throughout its various
                touch points on the internet. A website is crucial to any
                business, and with the right web presentation a business can
                thrive.
              </p>
            </div>
          </Link>
        </div>
        <div className="w-full py-4 mt-8 text-white"></div>
      </div>
    </section>
  );
}
