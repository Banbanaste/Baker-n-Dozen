// next.js
import Image from "next/image";

export default function AlphaGraphic() {
  return (
    <div className="flex phone:flex-wrap items-start phone:items-center justify-center w-96 non-phone:h-88 phone:w-screen h-88">
      <div className="project-image non_phone:w-84 non_phone:hover:scale-150">
        <Image src="/images/ac1.png" alt="Alphacladding Desktop View" unsized />
      </div>
      <div className="project-image -ml-32 mt-32 w-56 z-10 phone:hidden non_phone:hover:scale-150">
        <Image src="/images/ac2.png" alt="Alphacladding Desktop View" unsized />
      </div>
      <div className="project-image -ml-20 mt-16 w-64 z-20 phone:hidden non_phone:hover:scale-150">
        <Image src="/images/ac3.png" alt="Alphacladding Desktop View" unsized />
      </div>
    </div>
  );
}
