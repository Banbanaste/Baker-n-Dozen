// calendly
import { openPopupWidget } from "react-calendly";

// icons
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";

// components
import ContactButton from "./contactButton";

export default function Nav() {
  return (
    <nav className="bg-black text-white fixed bottom-0 larger:hidden w-full z-10">
      <div className="flex flex-col justify-between items-center h-full font-bold uppercase container mx-auto justify-between py-6 px-4">
        <div className="flex text-3xl justify-between w-full items-center">
          <ContactButton classes="hover:underline text-base font-bold leading-none tracking-wider cursor-pointer" />
          <a href="" className="hover:text-very_blue cursor-pointer text-2xl">
            <MdMailOutline />
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
