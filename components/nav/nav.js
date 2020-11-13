// Next.js libraries
import Link from "next/link";
import Image from "next/image";

// icons
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";

// calendly
import ContactBtn from "../templates/contactButton";

export default function Nav(props) {
  return (
    <nav className="bg-dark w-full phone:hidden fixed top-0 z-50 py-2 px-4">
      <div
        className="container mx-auto flex justify-between items-center uppercase text-white py-2"
        style={{ fontWeight: "800" }}
      >
        <div className="flex justify-between items-center space-x-4">
          <Image
            src="/images/logo_light.svg"
            alt="Caveman Consulting Co. Logo"
            height="45"
            width="45"
          />
          <Link href="/">Caveman Consulting</Link>
        </div>
        <div className="space-x-10 ">
          <Link href="/">Marketing</Link>
          <Link href="/">Web</Link>
          <Link href="/#projects">Projects</Link>
          {/* <div className="cursor-pointer">
            <Link href="/">
              <TiSocialFacebookCircular />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/">
              <TiSocialLinkedinCircular />
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/">
              <MdMailOutline />
            </Link>
          </div> */}
          <ContactBtn classes="cursor-pointer">Contact</ContactBtn>
        </div>
      </div>
    </nav>
  );
}
