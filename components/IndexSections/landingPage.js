// next.js
import Image from "next/image";
import Link from "next/link";

// calendly
import ContactBtn from "../templates/contactButton";

export default function LandingPage() {
  return (
    <section
      aria-label="Schedule an Appointment to help your business."
      className=""
    >
      <div className="container section-default text-light">
        <div className="flex flex-col justify-center items-center max-w-96 text-center bg-burg px-8 pb-20 pt-0 shadow-lg">
          <div
            className="pt-10 opacity-75"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            <span className="flex items-center justify-center rounded-full mb-10">
              <Image
                src="/images/logo_dark.svg"
                alt="Caveman Consulting Co. Logo"
                height="100"
                width="100"
              />
            </span>
          </div>
          <h1
            className="text-5xl phone:text-3xl font-bold mb-6"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            Bring your business out of the Stone Age
          </h1>
          <p
            className="text-2xl phone:text-base font-medium mb-12"
            data-aos="fade-down"
            data-aos-delay="450"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            with a modern web experience and marketing campaign anything is
            possible
          </p>
          <div className="w-full flex flex-wrap-reverse justify-around items-center">
            <span
              className=""
              data-aos="fade-down"
              data-aos-delay="550"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <ContactBtn classes="duration-300 ease rounded-lg px-8 py-2 bg-light text-burg cursor-pointer font-bold hover:opacity-50 ">
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
              <span className="duration-300 ease hover:opacity-50 font-bold">
                <Link href="/">More Info</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
