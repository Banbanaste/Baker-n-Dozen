// next.js
import Image from "next/image";
import Link from "next/link";

// calendly
// import ContactBtn from "../templates/contactButton";

export default function LandingPage({ setShowMenu }) {
  return (
    <section
      aria-label="Schedule an Appointment to help your business."
      className="section-default overflow relative"
    >
      <div className="absolute top-0 right-0 pointer-events-none w-7/12 flex justify-end">
        <Image
          src="/images/bison.png"
          alt="Ooh a Bison"
          height="1066"
          width="677"
          priority
        />
      </div>

      <div className="container text-light flex justify-start xl:pl-32 z-20">
        <div className="max-w-84 2xl:max-w-96">
          <div className="mb-4">
            <Image
              src="/images/logo_icon_red.png"
              alt="Caveman Consulting Co. Logo"
              height="100"
              width="97"
              priority
            />
          </div>
          <h1 className="text-5xl phone:text-3xl font-bold tracking-wide mb-6 z-10">
            Bring your business out of the Stone Age
          </h1>
          <p className="text-3xl phone:text-base font-medium mb-12 z-10">
            Take advantage of a modern web experience and an advanced digital
            marketing campaign to take your business to new heights.
          </p>
          <div className="w-full flex flex-wrap">
            <span className=" mr-10 mb-6">
              {/* <ContactBtn classes="duration-300 ease rounded-lg px-8 phone:px-4 py-2 bg-light text-burg cursor-pointer font-bold hover:opacity-50 ">
                Schedule a Consult
              </ContactBtn> */}
              <a
                className="duration-300 ease rounded-lg px-8 phone:px-4 py-2 bg-light text-burg cursor-pointer font-bold hover:opacity-50 "
                onClick={() => setShowMenu(true)}
              >
                Contact
              </a>
            </span>
            <div>
              <span className="duration-300 ease hover:opacity-50 font-bold ">
                <Link href="/#what">More Info</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
