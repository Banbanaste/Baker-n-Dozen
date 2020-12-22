// components
import Layout from "../components/templates/layout";

// next.js
import Image from "next/image";

// calendy
import ContactButton from "../components/templates/contactButton";

export default function SalePage() {
  return (
    <Layout
      isLanding={true}
      title="Caveman | End of Year"
      description="End of Year Sale! Get a Free Landing Page with any Marketing Campaign. Save $500 Today! Book a consultation! Sale Ends 12/31/2020."
    >
      <div className="bg-tone min-h-screen">
        <section className="py-10 bg-white">
          <div data-aos="fade" className="container text-center mb-10 mx-auto">
            <h2 className="text-xl text-gray-700 mb-2">ENDS 12/31</h2>
            <h1 className="text-5xl font-bold text-dark mb-4">
              END OF YEAR SALE
            </h1>
            <h3 className="text-2xl font-bold text-dark mb-12">
              Free Tailored Landing Page with any Marketing Campaign. $500
              value!
            </h3>
            <ContactButton classes="bg-light_burg text-light py-2 px-20 text-3xl font-bold rounded-full hover:opacity-50 duration-300 cursor-pointer">
              Book Now
            </ContactButton>
          </div>
        </section>
        <div className="w-full py-12 flex flex-wrap justify-around items-center px-10">
          <div className="w-88 phone:w-11/12">
            <Image
              src="/images/landing1.png"
              alt="Landing Page Example"
              height="835"
              width="812"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
