// next.js
import Image from "next/image";

export default function MarketingCardImg() {
  return (
    <div className="flex flex-col items-center justify-between space-y-4 p-4 py-6">
      <div className="w-32">
        <Image
          src="/images/google.png"
          className="w-full"
          alt="Google logo"
          height="51"
          width="150"
        />
      </div>
      <div className="w-32">
        <Image
          src="/images/facebook.png"
          className="w-full"
          alt="Facebook logo"
          height="30"
          width="150"
        />
      </div>
      <div className="w-32">
        <Image
          src="/images/instagram.png"
          className="w-full"
          alt="Instagram logo"
          height="52"
          width="150"
        />
      </div>
      <div className="w-32">
        <Image
          src="/images/linkedin.png"
          className="w-full"
          alt="LinkedIn logo"
          height="39"
          width="150"
        />
      </div>
    </div>
  );
}
