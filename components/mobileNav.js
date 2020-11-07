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
    <div className="non_phone:hidden">
      <nav className="bg-dark w-full fixed top-0 z-50 py-2 ">
        <div className="container mx-auto flex justify-center uppercase text-white py-2 font-semibold">
          <Link href="/">Caveman Consulting Co.</Link>
        </div>
      </nav>
      <nav className="bg-dark w-full fixed bottom-0 z-50 py-2">
        <div className="container mx-auto flex justify-between uppercase text-white py-2 px-2 font-semibold">
          <Link href="/">Marketing</Link>
          <Link href="/">Web</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Contact</Link>
        </div>
      </nav>
    </div>
  );
}
