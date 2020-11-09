// components
import CardTemplate from "../templates/cardTemplate";
import MarketingCardImg from "../reduceClutter/marketingCardImg";
import WebCardImg from "../reduceClutter/webCardImg";

export default function AnimatedInfoCards() {
  return (
    <section className="container section-default">
      <div className="w-full">
        <h1 className="section-title">Services</h1>
        <div className="flex justify-around items-start h-96">
          <CardTemplate
            classes="shadow-xl z-20 mr-16"
            title="Marketing"
            info={[
              "Trying to attreact more clients to grow revenue? Our marketing plans are the perfect option for you. Fromn Google Advertising to Social Media, we can grow your book of business in as little as 60 days.",
            ]}
          >
            <MarketingCardImg />
          </CardTemplate>
          <CardTemplate
            classes="mt-20 self-center shadow-xl z-20"
            title="Web"
            info={[
              "We design, develop, deploy, and maintain web experiences so you can focus on growing your business. We create websites that will accomplish your goals, and increase your brand value.",
              "We want your business to seemlesly flow throughout its various touch points on the internet. A website is crucial to any business, and with the right web presentation a business can thrive.",
            ]}
          >
            <WebCardImg />
          </CardTemplate>
          <div className="w-84 h-84 rounded-full gradient self-center absolute z-0" />
          <div className="transform -translate-y-48 translate-x-32 w-48 h-48 border-15 border-light rounded-full gradient self-center absolute z-10" />
        </div>
      </div>
    </section>
  );
}
