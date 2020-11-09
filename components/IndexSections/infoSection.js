// components
import CardTemplate from "../templates/cardTemplate";
import MarketingCardImg from "../reduceClutter/marketingCardImg";
import WebCardImg from "../reduceClutter/webCardImg";

export default function AnimatedInfoCards() {
  return (
    <section className="container section-default pb-32">
      <div className="w-full h-full">
        <h1 className="section-title">Services</h1>
        <div className=" flex flex-wrap justify-around items-start phone:items-center phone:justify-center h-96 phone:h-full">
          <CardTemplate
            classes="shadow-xl z-20 mr-16 phone:mr-0"
            title="Marketing"
            info={[
              "Trying to attreact more clients to grow revenue? Our marketing plans are the perfect option for you. Fromn Google Advertising to Social Media, we can grow your book of business in as little as 60 days.",
            ]}
          >
            <MarketingCardImg />
          </CardTemplate>
          <CardTemplate
            classes="mt-20 non_phone:self-center shadow-xl z-20"
            title="Web"
            info={[
              "We design, develop, deploy, and maintain web experiences so you can focus on growing your business. We create websites that will accomplish your goals, and increase your brand value.",
              "We want your business to seemlesly flow throughout its various touch points on the internet. A website is crucial to any business, and with the right web presentation a business can thrive.",
            ]}
          >
            <WebCardImg />
          </CardTemplate>
          <div className="w-84 h-84 phone:w-64 phone:h-64 rounded-full gradient self-center absolute z-0" />
          <div className="transform -translate-y-48 translate-x-32 w-48 h-48 phone:-translate-y-32 phone:translate-x-16 phone:w-32 phone:h-32 border-15 phone:border-4 border-light rounded-full gradient self-center absolute z-10" />
        </div>
      </div>
    </section>
  );
}
