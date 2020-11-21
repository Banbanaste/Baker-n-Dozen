// next.js
import Link from "next/link";
import Image from "next/image";

// components
import CardTemplate from "../templates/cardTemplate";
import MarketingCardImg from "../reduceClutter/marketingCardImg";
import WebCardImg from "../reduceClutter/webCardImg";

// google analytics
import { logEvent } from "../../utils/analytics";

export default function AnimatedInfoCards() {
  return (
    <section className="relative" id="about" data-aos="fade">
      <div className="container section-default py-32">
        <div className="w-full">
          <h1 className="section-title phone:mb-4 text-light phone:text-3xl">
            What We Do
          </h1>
          <div className="flex flex-wrap justify-around w-full phone:items-center phone:justify-center">
            <Link href="/marketing">
              <span
                className="z-20 mb-12"
                onClick={() => {
                  logEvent(
                    "NAVIGATION",
                    "Marketing card clicked, redirect user to /marketing",
                    "MARKETING CARD"
                  );
                }}
              >
                <CardTemplate
                  classes="z-20 max-w-84 w-full"
                  title="Marketing"
                  info={[
                    "Trying to attreact more clients to grow revenue? Our marketing plans are the perfect option for you. Fromn Google Advertising to Social Media, we can grow your book of business in as little as 60 days.",
                  ]}
                >
                  <MarketingCardImg />
                </CardTemplate>
              </span>
            </Link>
            <Link href="/web">
              <span
                className="z-20 max-w-84 w-full"
                onClick={() => {
                  logEvent(
                    "NAVIGATION",
                    "Web card clicked, redirect user to /web",
                    "WEB CARD"
                  );
                }}
              >
                <CardTemplate
                  classes="z-20"
                  title="Web"
                  info={[
                    "We design, develop, deploy, and maintain web experiences so you can focus on growing your business. We create websites that will accomplish your goals, and increase your brand value.",
                    "We want your business to seemlesly flow throughout its various touch points on the internet. A website is crucial to any business, and with the right web presentation a business can thrive.",
                  ]}
                >
                  <WebCardImg />
                </CardTemplate>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
