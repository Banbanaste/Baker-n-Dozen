// Next.js libraries
import Link from "next/link";

// icons
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { MdMailOutline } from "react-icons/md";

export default function Nav(props) {
  return (
    <nav className="bg-black text-white phone:hidden">
      <div className="flex flex-wrap items-center h-full font-bold uppercase container mx-auto justify-between py-6 px-4">
        <div className="flex text-2xl phone:w-full phone:justify-between phone:text-2xl">
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
        <div className="flex text-4xl phone:hidden">
          <a
            href=""
            className="mr-6 hover:text-very_blue cursor-pointer text-3xl self-center"
          >
            <MdMailOutline />
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
