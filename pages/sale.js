// components
import Layout from "../components/templates/layout";

// next.js
import Image from "next/image";

// calendy
import ContactButton from "../components/templates/contactButton";

export default function MarketingPage() {
  return (
    <Layout
      title="Caveman | Black Friday"
      description="Black Friday Sale! Get a Free Landing Page with any Marketing Campaign. Save $500 Today! Book a 15 minute consultation! Sale Ends 12/4/2020."
    >
      <section
        className="section-default flex-col pt-24"
        style={{
          background: "url(/images/confetti.gif)",
        }}
      >
        <div className="container">
          <div data-aos="fade" className="text-center mb-10 bg-white rounded">
            <h2 className="text-xl text-gray-700 mb-2">ENDS 12/04</h2>
            <h1 className="text-5xl font-bold text-dark mb-4">
              BLACK FRIDAY SALE
            </h1>
            <h3 className="text-2xl font-bold text-dark mb-12">
              Free Landing Page with any Marketing Campaign. $500 value!
            </h3>
            <ContactButton
              classes="bg-light_burg text-dark py-2 px-20 text-3xl font-bold rounded-full hover:opacity-50 duration-300 cursor-pointer"
              sale={true}
            >
              Book Now
            </ContactButton>
          </div>
          <h1 className=" text-gray-900 text-3xl z-20 text-center">Examples</h1>
          <div className="w-full flex flex-wrap justify-around items-center ">
            <div className="w-72">
              <Image
                src="/images/landing1.png"
                alt="Landing Page Example"
                height="846"
                width="500"
              />
            </div>

            <div className="w-72">
              <Image
                src="/images/landing2.png"
                alt="Landing Page Example"
                height="767"
                width="500"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
