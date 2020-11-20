// next.js
import Image from "next/image";

export default function WebCardImg() {
  return (
    <div className="flex flex-wrap items-end justify-between p-4 py-6">
      <div className="w-16">
        <Image
          layout="fill"
          src="/images/js.png"
          alt="Javascript logo"
          height="100"
          width="100"
        />
      </div>
      <div className="w-20">
        <Image
          layout="fill"
          src="/images/aws.png"
          alt="AWS logo"
          height="134"
          width="208"
        />
      </div>
      <div className="w-16">
        <Image
          layout="fill"
          src="/images/gql.png"
          alt="GraphQL logo"
          height="100"
          width="100"
        />
      </div>
    </div>
  );
}
