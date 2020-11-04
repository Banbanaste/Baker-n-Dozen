// next.js
import Link from "next/link";

// icons
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";

// components
import ContactButton from "./contactButton";

export default function BottomNav(props) {
  return (
    <>
      <nav className="bg-black text-white fixed bottom-0 larger:hidden w-full z-10">
        <div className="flex flex-col justify-between items-start h-full font-bold uppercase container mx-auto justify-between py-4 px-4 ">
          <div className="flex w-full justify-between">
            <Link href={`/${props.a === "home" ? "" : props.a}`}>
              <h1 className="larger:mr-10 hover:text-very_blue cursor-pointer">
                {props.a}
              </h1>
            </Link>
            <Link href={`/${props.b}`}>
              <h1 className="larger:mr-10 hover:text-very_blue cursor-pointer">
                {props.b}
              </h1>
            </Link>
            <Link href={`/${props.c}`}>
              <h1 className="larger:mr-10 hover:text-very_blue cursor-pointer">
                {props.c}
              </h1>
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-black text-white fixed top-0 larger:hidden w-full z-10">
        <div className="flex flex-col justify-between items-start h-full font-bold uppercase container mx-auto justify-between py-4 px-4 ">
          <div className="flex text-3xl justify-between w-full items-center ">
            <ContactButton classes="hover:text-very_blue text-base font-bold cursor-pointer" />
            <div className="flex items-center justify-between w-1/2 tablet:w-4/12">
              <a
                href=""
                className="hover:text-very_blue cursor-pointer text-2xl"
              >
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
        </div>
      </nav>
    </>
  );
}
