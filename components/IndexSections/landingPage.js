// next.js
import Image from "next/image";
import Link from "next/link";

// calendly
import ContactBtn from "../templates/contactButton";

export default function LandingPage() {
  return (
    <section
      aria-label="Schedule an Appointment to help your business."
      className="section-default overflow relative"
      style={{}}
    >
      <div className="absolute top-0 right-0 pointer-events-none w-7/12 flex justify-end">
        <Image
          className=""
          src="/images/bison.png"
          alt="Ooh a Bison"
          height="1066"
          width="677"
        />
      </div>

      <div className="container text-light flex justify-start xl:pl-32 z-20">
        <div className="max-w-84 2xl:max-w-96">
          <div
            className="mb-4"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <Image
              src="/images/logo_icon_red.png"
              alt="Caveman Consulting Co. Logo"
              height="100"
              width="100"
            />
          </div>
          <h1
            className="text-5xl phone:text-3xl font-bold mb-6 z-10"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            Bring your business out of the Stone Age
          </h1>
          <p
            className="text-3xl phone:text-base font-medium mb-12 z-10"
            data-aos="fade-down"
            data-aos-delay="450"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            with a modern web experience and marketing campaign anything is
            possible
          </p>
          <div className="w-full flex flex-wrap">
            <span
              className=" mr-10 mb-6"
              data-aos="fade-down"
              data-aos-delay="550"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <ContactBtn classes="duration-300 ease rounded-lg px-8 phone:px-4 py-2 bg-light text-burg cursor-pointer font-bold hover:opacity-50 ">
                Schedule a Consult
              </ContactBtn>
            </span>
            <div
              data-aos="fade-down"
              data-aos-delay="650"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <span className="duration-300 ease hover:opacity-50 font-bold ">
                <Link href="/#about">More Info</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
