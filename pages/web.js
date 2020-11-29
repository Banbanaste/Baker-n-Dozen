// next.js
import Image from "next/image";

// components
import Layout from "../components/templates/layout";

// calendy
import ContactButton from "../components/templates/contactButton";

export default function MarketingPage() {
  return (
    <Layout
      title="Caveman | Web Development"
      description="Our Web Development Services include all the dynamics needed to run your business online. For any E-Comm, Service Provider, Consulting, or Small Business our websites will display your business in an elegant professional way that will blow your customers and clients away! We specialize in Jamstack, Landing Pages, CMS, Next.js, Gatsby.js, React.js, Javascript, AWS, E-commerce, Shopify, Big Commerce, Static, Responsive, Dynamic, Server Side Rendering, Static Site Generator."
    >
      <section className="bg-dark items-start py-32">
        <div className="container mx-auto pt-6 space-y-16 flex flex-col justify-center items-center z-20">
          <div className="text-white text-center max-w-100 mx-auto text-xl phone:text-lg">
            <h1
              className="text-5xl font-bold mb-8 text-center phone:text-3xl"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              Our Web Services
            </h1>
            <p
              className="mb-12"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              We curate a modern web experience for your end user. We want your
              customers to get the full effect of your branding, product, and
              services, whether they be online or in person. We work in web
              design and development to create a website that delivers value to
              you and your customers.
            </p>
            <span
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <ContactButton classes="rounded-lg bg-white text-dark hover:opacity-25 duration-300 cursor-pointer px-8 py-2 ">
                Schedule a 15 mintue Consultaion Now
              </ContactButton>
            </span>
          </div>
        </div>
      </section>
      <section className="bg-light_burg text-tone py-24">
        <div
          className="container px-10 mx-auto text-xl phone:text-lg"
          data-aos="fade"
        >
          <div className="max-w-96 ">
            <h2 className="text-3xl phone:text:2xl font-bold uppercase mb-6">
              E-comerce & Static Solutions
            </h2>
            <p className="mb-4">
              If you have a Shopify or WordPress site and are looking for a tune
              up, or if you're starting from scratch, our team will work side by
              side with you to make sure the platform you use is optimized for
              your business.
            </p>
            <p>
              We can create anything from site speed optimizations to Shopify
              apps.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-tone text-light_burg py-24">
        <div
          className="container px-10 mx-auto text-xl phone:text-lg"
          data-aos="fade"
        >
          <div className="max-w-96">
            <h2 className="text-3xl phone:text:2xl font-bold uppercase mb-6">
              Custom Solutions
            </h2>
            <p>
              Caveman Consulting Co. works within the Jamstack to create
              powerful web applications. Apart from the web, we can make
              anything under the sun with Javascript. Whether it be for web,
              mobile, or desktop a solution exists, and is within your reach.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
