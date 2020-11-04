// components
import Nav from "../components/nav";
import BottomNav from "../components/bottomNav";
import ContactButton from "../components/contactButton";

export default function MarketingPage() {
  return (
    <>
      <Nav a="home" b="web" c="both" />
      <section className="container mx-auto px-4 phone:pb-20">
        <div className="mt-10">
          <h1 className="text-5xl font-extrabold">Marketing</h1>
          <p className="text-xl">
            With our expertise of small, medium, and large business marketing
            strategies. Caveman Consulting Co. can grow your business with
            campaigns that you can stand behind! With an in-depth analysis of
            your business’s goals and aspirations that will attract customers at
            the right time when they are most likely to engage giving you the
            best opportunity to attract users. We are about effectively spending
            advertising dollars not quickly.
          </p>
        </div>
        <div className="mt-10 flex">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold">Google Advertising</h2>
            <p className="">
              Google can be the secret recipe to grow any online or even brick
              and mortar business. With Search Ads, Map Ads, Click to Call Ads
              Caveman Consulting Co. can provide all the coverage you will need
              to succeed on the Google search platform. Google being the most
              popular search engine by a long shot.
            </p>
            <h2 className="text-xl font-bold mt-6">Social Media Advertising</h2>
            <p>
              Social Media has took the business world by storm and having a
              presence on social media is always a vital way to get gain traffic
              traction online. With our in-depth of analysis of your target
              audience our Facebook Marketing campaigns will allow target the
              right person for your brand. If you are looking to partner with
              other professionals in your industry our LinkedIn campaigns can be
              a powerful tool to attract professionals in target industries.
            </p>
            <ContactButton clesses="" />
          </div>
          <div></div>
        </div>
      </section>
      <BottomNav a="home" b="web" c="both" />
    </>
  );
}
