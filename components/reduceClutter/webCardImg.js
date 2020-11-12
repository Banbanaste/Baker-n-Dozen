// next.js
import Image from "next/image";

export default function WebCardImg() {
  return (
    <div className="flex flex-wrap items-end justify-between py-4">
      <div className="w-16">
        <Image
          layout="fill"
          src="/images/js.png"
          alt="Javascript logo"
          unsized
        />
      </div>
      <div className="w-20">
        <Image layout="fill" src="/images/aws.png" alt="AWS logo" unsized />
      </div>
      <div className="w-16">
        <Image layout="fill" src="/images/gql.png" alt="GraphQL logo" unsized />
      </div>
    </div>
  );
}
