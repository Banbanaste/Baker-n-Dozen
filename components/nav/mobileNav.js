// next.js
import Link from "next/link";
import Image from "next/image";

// icons
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";

// calendly
import ContactBtn from "../templates/contactButton";

export default function BottomNav(props) {
  return (
    <div className="non_phone:hidden">
      <nav className="bg-dark w-full fixed top-0 z-50 py-2 ">
        <div className="container mx-auto flex justify-center uppercase text-white py-2 font-semibold space-x-4 items-center">
          <Image
            src="/images/logo_dark.svg"
            alt="Caveman Consulting Co. Logo"
            height="45"
            width="45"
            priority
          />
          <Link href="/">
            <a className="text-sm">
              Caveman <br /> Consulting
            </a>
          </Link>
        </div>
      </nav>
      <nav className="bg-dark w-full fixed bottom-0 z-50 py-2">
        <div className="container mx-auto flex justify-between items-center uppercase text-white py-2 px-2 font-semibold text-base">
          <Link href="/">Home</Link>
          <Link href="/marketing">Marketing</Link>
          <Link href="/web">Web</Link>
          <a className="cursor-pointer" onClick={() => props.setShowMenu(true)}>
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
