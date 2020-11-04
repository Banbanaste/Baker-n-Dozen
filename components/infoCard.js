// Next.js libraries
import Image from "next/image";

export default function InfoCard(props) {
  return (
    <div className="max-w-lg flex pt-2 pb-6 phone:max-w-full larger:mr-4">
      {/* <div className="w-1/5 phone:hidden">
        <Image
          src={props.icon}
          alt="Icon bullet point"
          width="50"
          height="50"
        />
      </div> */}
      <div className="">
        <h1 className="font-bold text-3xl text-center capitalize mb-2 flex items-center">
          {props.title}{" "}
          {/* <span className="transform scale-90 ml-6 larger:hidden">
            <Image
              src={props.icon}
              alt="Here is a trophy for good luck"
              width="50"
              height="50"
            />
          </span> */}
        </h1>
        {props.children}
      </div>
    </div>
  );
}
