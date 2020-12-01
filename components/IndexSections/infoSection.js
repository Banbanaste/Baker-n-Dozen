// next.js
import Link from "next/link";

// google analytics
import { logEvent } from "../../utils/analytics";

// icons
import {
  GrGoogle,
  GrFacebook,
  GrInstagram,
  GrReactjs,
  GrGraphQl,
} from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { FaAws, FaShopify, FaLinkedinIn } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function AnimatedInfoCards() {
  return (
    <section className="relative" id="what" data-aos="fade">
      <div className="section-default pt-24 pb-10">
        <div className="max-w-96 text-light">
          <h1 className="section-title mb-4 phone:mb-4 phone:text-3xl">
            What We Do
          </h1>
          <div className="max-w-96 text-white flex justify-start text-4xl mx-auto flex-wrap mb-4 bg-dark rounded bg-opacity-75">
            <div className="opacity-50 hover:opacity-100 hover:text-red-500  duration-300 duration-300 m-4">
              <a href="https://ads.google.com/home/" target="_blank">
                <GrGoogle />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 hover:text-pink-500  duration-300 m-4">
              <a target="_blank" href="https://graphql.org/">
                <GrGraphQl />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 hover:text-blue-400 duration-300 m-4">
              <a
                target="_blank"
                href="https://business.linkedin.com/marketing-solutions"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 hover:text-green-400  duration-300 m-4">
              <a target="_blank" href="https://developers.shopify.com/">
                <FaShopify />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 hover:text-blue-700 duration-300 m-4">
              <a target="_blank" href="https://www.facebook.com/business">
                <GrFacebook />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 hover:text-blue-500 duration-300 m-4">
              <a target="_blank" href="https://reactjs.org/">
                <GrReactjs />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 duration-300 m-4">
              <a target="_blank" href="https://business.instagram.com/">
                <GrInstagram />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 hover:text-green-300 duration-300 m-4">
              <a target="_blank" href="https://tailwindcss.com/">
                <SiTailwindcss />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 hover:text-purple-900 duration-300 m-4">
              <a target="_blank" href="https://aws.amazon.com/">
                <FaAws />
              </a>
            </div>
            <div className="opacity-50 hover:opacity-100 hover:text-yellow-500 duration-300 m-4">
              <a
                target="_blank"
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              >
                <IoLogoJavascript />
              </a>
            </div>
          </div>
          <Link href="/marketing">
            <div
              className="text-xl phone:text-lg mb-4 cursor-pointer bg-dark p-6 rounded bg-opacity-75 hover:opacity-50 duration-300"
              onClick={() => {
                logEvent(
                  "NAVIGATION",
                  "Marketing card clicked, redirect user to /marketing",
                  "MARKETING CARD"
                );
              }}
            >
              <h2 className="uppercase text-3xl phone:text-2xl font-bold mb-4">
                Marketing
              </h2>
              <p>
                Trying to attract more clients to grow your revenue? Our
                marketing plans are the perfect option for you. From Google
                Advertising to Social Media, we can grow your book of business
                in as little as 60 days.
              </p>
            </div>
          </Link>

          <Link href="/web">
            <div
              className="text-xl phone:text-lg cursor-pointer bg-dark p-6 rounded bg-opacity-75 hover:opacity-50 duration-300"
              onClick={() => {
                logEvent(
                  "NAVIGATION",
                  "Web card clicked, redirect user to /web",
                  "WEB CARD"
                );
              }}
            >
              <h2 className="uppercase text-3xl phone:text-2xl font-bold mb-4 ">
                Web Development
              </h2>
              <p className="mb-4">
                We design, develop, deploy, and maintain your website, so you
                can focus on growing your business. We create websites that will
                accomplish your goals, and increase your brand value.
              </p>
              <p>
                We want your business to seamlessly flow throughout its various
                touch points on the internet because that’s the most likely
                place where new leads will discover you, your products, or your
                services. A website is crucial to any business, and with the
                right web presentation, a business can thrive.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
