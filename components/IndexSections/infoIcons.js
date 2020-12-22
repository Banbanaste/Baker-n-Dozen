// icons
import {
  GrGoogle,
  GrFacebook,
  GrInstagram,
  GrReactjs,
  GrGraphQl,
} from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { FaAws, FaShopify, FaLinkedinIn } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

export default function InfoIcons() {
  return (
    <div className="max-w-96 text-white flex justify-start text-4xl mx-auto flex-wrap mb-4 bg-dark rounded bg-opacity-75">
      <div className="opacity-50 hover:opacity-100 hover:text-red-500  duration-300 duration-300 m-4">
        <a href="https://ads.google.com/home/" target="_blank">
          <GrGoogle />
        </a>
      </div>
      <div className="opacity-50 hover:opacity-100 hover:text-pink-500  duration-300 m-4">
        <a target="_blank" href="https://graphql.org/">
          <GrGraphQl />
        </a>
      </div>
      <div className="opacity-50 hover:opacity-100 hover:text-blue-400 duration-300 m-4">
        <a
          target="_blank"
          href="https://business.linkedin.com/marketing-solutions"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className="opacity-50 hover:opacity-100 hover:text-green-400  duration-300 m-4">
        <a target="_blank" href="https://developers.shopify.com/">
          <FaShopify />
        </a>
      </div>
      <div className="opacity-50 hover:opacity-100 hover:text-blue-700 duration-300 m-4">
        <a target="_blank" href="https://www.facebook.com/business">
          <GrFacebook />
        </a>
      </div>
      <div className="opacity-50 hover:opacity-100 hover:text-blue-500 duration-300 m-4">
        <a target="_blank" href="https://reactjs.org/">
          <GrReactjs />
        </a>
      </div>
      <div className="opacity-50 hover:opacity-100 duration-300 m-4">
        <a target="_blank" href="https://business.instagram.com/">
          <GrInstagram />
        </a>
      </div>
      <div className="opacity-50 hover:opacity-100 hover:text-green-300 duration-300 m-4">
        <a target="_blank" href="https://tailwindcss.com/">
          <SiTailwindcss />
        </a>
      </div>
      <div className="opacity-50 hover:opacity-100 hover:text-purple-900 duration-300 m-4">
        <a target="_blank" href="https://aws.amazon.com/">
          <FaAws />
        </a>
      </div>
      <div className="opacity-50 hover:opacity-100 hover:text-yellow-500 duration-300 m-4">
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        >
          <IoLogoJavascript />
        </a>
      </div>
    </div>
  );
}
