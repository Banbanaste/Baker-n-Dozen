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
          unsized
        />
      </div>
      <div className="w-32">
        <Image
          src="/images/facebook.png"
          className="w-full"
          alt="Facebook logo"
          unsized
        />
      </div>
      <div className="w-32">
        <Image
          src="/images/instagram.png"
          className="w-full"
          alt="Instagram logo"
          unsized
        />
      </div>
      <div className="w-32">
        <Image
          src="/images/linkedin.png"
          className="w-full"
          alt="LinkedIn logo"
          unsized
        />
      </div>
    </div>
  );
}
