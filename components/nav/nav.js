// Next.js libraries
import Link from "next/link";
import Image from "next/image";

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
            src="/images/logo_dark.svg"
            alt="Caveman Consulting Co. Logo"
            height="45"
            width="45"
          />
          <Link href="/">
            <a className="text-sm">
              Caveman <br /> Consulting
            </a>
          </Link>
        </div>
        <div className="space-x-10 ">
          <Link href="/marketing">Marketing</Link>
          <Link href="/web">Web</Link>
          <Link href="/#projects">Projects</Link>
          <ContactBtn classes="cursor-pointer">Contact</ContactBtn>
        </div>
      </div>
    </nav>
  );
}
