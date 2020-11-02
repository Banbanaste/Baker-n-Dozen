// Next.js libraries
import Link from "next/link";

// calendly
import { openPopupWidget } from "react-calendly";

// icons
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiMailDotRu } from "react-icons/si";

export default function Nav() {
  const calendlyClick = () => {
    openPopupWidget({ url: "https://calendly.com/consultaion_test/marketing" });
  };
  return (
    <nav className="bg-black text-white fixed bottom-0 larger:hidden w-full">
      <div className="flex flex-col justify-center items-center h-full font-bold uppercase container mx-auto justify-between py-6 px-4">
        <a
          className="hover:underline text-very_blue text-xl font-bold leading-none tracking-wider cursor-pointer mb-6"
          onClick={calendlyClick}
        >
          Schedule an Appointment
        </a>
        <div className="flex text-3xl w-1/2 justify-between items-center">
          <a href="" className="hover:text-very_blue cursor-pointer text-2xl">
            <SiMailDotRu />
          </a>
          <a href="" className="hover:text-very_blue cursor-pointer">
            <TiSocialFacebookCircular />
          </a>
          <a href="" className="hover:text-very_blue cursor-pointer">
            <TiSocialLinkedinCircular />
          </a>
        </div>
      </div>
    </nav>
  );
}
