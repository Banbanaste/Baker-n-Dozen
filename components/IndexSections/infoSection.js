// google analytics
import { logEvent } from "../../utils/analytics";

// components
import InfoIcons from "./infoIcons";
import InfoCard from "./infoCard";

export default function AnimatedInfoCards() {
  return (
    <section className="relative" id="what" data-aos="fade">
      <div className="section-default pt-24 pb-10">
        <div className="max-w-96 text-light">
          <h1 className="section-title mb-4 tracking-wide phone:mb-4 phone:text-3xl">
            What We Do
          </h1>
          <InfoIcons />
          <InfoCard
            to="/marketing"
            click={() => {
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
              Trying to attract more clients to grow your revenue? Our marketing
              plans are the perfect option for you. From Google Advertising to
              Social Media, we can grow your book of business in as little as 60
              days.
            </p>
          </InfoCard>

          <InfoCard
            to="/web"
            click={() => {
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
              We design, develop, deploy, and maintain your website, so you can
              focus on growing your business. We create websites that will
              accomplish your goals, and increase your brand value.
            </p>
            <p>
              We want your business to seamlessly flow throughout its various
              touch points on the internet because that’s the most likely place
              where new leads will discover you, your products, or your
              services. A website is crucial to any business, and with the right
              web presentation, a business can thrive.
            </p>
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
