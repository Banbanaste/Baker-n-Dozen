// Next.js libraries
import Link from "next/link";
import Image from "next/image";

// calendly
import ContactBtn from "../templates/contactButton";

export default function Nav(props) {
  return (
    <nav className="transform duration-500 w-full phone:hidden fixed top-0 z-50 py-2 px-4 bg-dark">
      <div className="container mx-auto flex justify-center items-center uppercase text-white space-x-10 tracking-widest text-sm font-bold">
        <Link href="/">
          <a className="text-sm">
            <Image
              src="/images/logo_icon.png"
              alt="Caveman Consulting Co. Logo"
              height="45"
              width="45"
              priority
            />
          </a>
        </Link>
        <Link href="/marketing">Marketing</Link>
        <Link href="/web">Web</Link>
        <Link href="/#projects">Projects</Link>
        <ContactBtn classes="cursor-pointer bg-light text-light_burg rounded-lg px-4 py-1 duration-300 hover:opacity-50">
          Contact
        </ContactBtn>
      </div>
    </nav>
  );
}
