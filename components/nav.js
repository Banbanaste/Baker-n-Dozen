// Next.js libraries
import Link from "next/link";

// icons
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { SiMailDotRu } from "react-icons/si";

export default function Nav() {
  return (
    <nav className="bg-black text-white">
      <div className="flex flex-wrap items-center h-full font-bold uppercase container mx-auto justify-between py-6 px-4">
        <div className="flex text-3xl phone:w-full phone:justify-between phone:text-2xl">
          <Link href="/web">
            <h1 className="larger:mr-10 hover:text-very_blue cursor-pointer">
              Web
            </h1>
          </Link>
          <Link href="/marketing">
            <h1 className="larger:mr-10 hover:text-very_blue cursor-pointer">
              Marketing
            </h1>
          </Link>
          <Link href="/both">
            <h1 className="larger:mr-10 hover:text-very_blue cursor-pointer">
              Both
            </h1>
          </Link>
        </div>
        <div className="flex text-5xl phone:hidden">
          <a
            href=""
            className="mr-6 hover:text-very_blue cursor-pointer text-4xl self-center"
          >
            <SiMailDotRu />
          </a>
          <a href="" className="mr-6 hover:text-very_blue cursor-pointer">
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
