// Next.js libraries
import Link from "next/link";

export default function InfoCard(props) {
  return (
    <div className="max-w-lg flex pt-2 pb-6 phone:max-w-full larger:mr-4">
      <div className="">
        <h1 className="font-bold text-3xl text-center capitalize mb-2 flex items-center hover:underline cursor-pointer">
          <Link href={`/${props.title}`}>{props.title}</Link>
        </h1>
        {props.children}
      </div>
    </div>
  );
}
