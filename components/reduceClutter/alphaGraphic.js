// next.js
import Image from "next/image";

export default function AlphaGraphic() {
  return (
    <div className="flex items-start justify-center w-96 h-88">
      <div className="project-image w-84">
        <Image src="/images/ac1.png" alt="Alphacladding Desktop View" unsized />
      </div>
      <div className="project-image -ml-32 mt-32 w-56 z-10">
        <Image src="/images/ac2.png" alt="Alphacladding Desktop View" unsized />
      </div>
      <div className="project-image -ml-20 mt-16 w-64 z-20">
        <Image src="/images/ac3.png" alt="Alphacladding Desktop View" unsized />
      </div>
    </div>
  );
}
