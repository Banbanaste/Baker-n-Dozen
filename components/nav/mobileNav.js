// next.js
import Link from "next/link";

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
        <div className="container mx-auto flex justify-center uppercase text-white py-2 font-semibold">
          <Link href="/">Caveman Consulting Co.</Link>
        </div>
      </nav>
      <nav className="bg-dark w-full fixed bottom-0 z-50 py-2">
        <div className="container mx-auto flex justify-between items-center uppercase text-white py-2 px-2 font-semibold text-4xl">
          <Link href="/">
            <TiSocialFacebookCircular />
          </Link>
          <Link href="/">
            <TiSocialLinkedinCircular />
          </Link>
          <Link href="/">
            <MdMailOutline />
          </Link>
          <ContactBtn classes="cursor-pointer text-base" />
        </div>
      </nav>
    </div>
  );
}
