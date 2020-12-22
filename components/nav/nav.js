// Next.js libraries
import Link from "next/link";

// calendly
// import ContactBtn from "../templates/contactButton";

export default function Nav(props) {
  return (
    <nav className="w-full phone:hidden fixed top-0 z-50 py-2 bg-dark">
      <div className="flex justify-between items-center uppercase text-white tracking-widest text-sm font-bold w-88 mx-auto">
        <Link href="/">
          <a className="">Home</a>
        </Link>
        <Link href="/marketing">Marketing</Link>
        <Link href="/web">Web</Link>
        <Link href="/#projects">Projects</Link>
        <a
          className="transform cursor-pointer bg-light text-light_burg rounded-lg px-4 py-1 duration-300 hover:opacity-50"
          onClick={() => props.setShowMenu(true)}
        >
          Contact
        </a>
        {/* <ContactBtn classes="transform cursor-pointer bg-light text-light_burg rounded-lg px-4 py-1 duration-300 hover:opacity-50">
          Contact
        </ContactBtn> */}
      </div>
    </nav>
  );
}
