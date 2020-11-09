// next.js
import Image from "next/image";

export default function MarketingCardImg() {
  return (
    <div className="flex flex-col items-center justify-between space-y-4 py-2">
      <div className="w-32">
        <Image
          src="/images/google.png"
          alt="Google logo"
          loading="eager"
          unsized
        />
      </div>
      <div className="w-32">
        <Image
          src="/images/facebook.png"
          alt="Facebook logo"
          loading="eager"
          unsized
        />
      </div>
      <div className="w-32">
        <Image
          src="/images/instagram.png"
          alt="Instagram logo"
          loading="eager"
          unsized
        />
      </div>
      <div className="w-32">
        <Image
          src="/images/linkedin.png"
          alt="LinkedIn logo"
          loading="eager"
          unsized
        />
      </div>
    </div>
  );
}
