// components
import Layout from "../components/templates/layout";
import CardTemplate from "../components/templates/cardTemplate";

// calendy
import ContactButton from "../components/templates/contactButton";

export default function MarketingPage() {
  return (
    <Layout a="home" b="web" c="both">
      <section className="section-default bg-burg items-start pt-24 phone:pb-20">
        <div className="container mx-auto pt-6 space-y-16 flex flex-col justify-center items-center">
          <div className="text-white text-center max-w-96 mx-auto">
            <h1 className="text-5xl font-bold mb-8">Our Marekting Services</h1>
            <p>
              With our expertise of small, medium, and large business marketing
              strategies. Caveman Consulting Co. can grow your business with
              campaigns that you can stand behind! With an in-depth analysis of
              your business’s goals and aspirations that will attract customers
              at the right time when they are most likely to engage giving you
              the best opportunity to attract users. We are about effectively
              spending advertising dollars not quickly.
            </p>
          </div>
          <ContactButton classes="rounded-lg bg-white hover:opacity-25 duration-300 cursor-pointer px-8 py-2 ">
            Schdeule a 15 mintue Consultaion Now
          </ContactButton>
          <div className="flex flex-wrap justify-around w-full">
            <CardTemplate
              classes="max-w-84 w-full mb-8"
              title="Google Advertising"
              info={[
                "Google can be the secret recipe to grow any online or even brick and mortar business. With Search Ads, Map Ads, Click to Call Ads Caveman Consulting Co. can provide all the coverage you will need to succeed on the Google search platform which is by far the most popular search engine for consumers.",
              ]}
            />
            <CardTemplate
              classes="max-w-84 w-full mb-8"
              title="Social Media Advertising"
              info={[
                "Social Media has took the business world by storm and having a presence on social media is always a vital way to get gain traffic traction online. With our in-depth of analysis of your target audience our Facebook Marketing campaigns will allow target the right person for your brand. If you are looking to partner with other professionals in your industry our LinkedIn campaigns can be a powerful tool to attract professionals in target industries.",
              ]}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
