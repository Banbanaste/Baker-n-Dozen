// next.js
import Image from "next/image";

export default function AlphaGraphic() {
  return (
    <div
      className="flex phone:flex-wrap items-end justify-start space-x-16 px-4"
      data-aos="fade-down"
      data-aos-once="true"
    >
      <div className="project-image non_phone:hover:scale-125">
        <Image
          src="/images/ac1.jpeg"
          alt="Alphacladding Desktop View"
          unsized
        />
      </div>
      <div className="project-image z-10 phone:hidden hover:scale-125 ">
        <Image
          src="/images/ac2.jpeg"
          alt="Alphacladding Desktop View"
          unsized
        />
      </div>
      <div className="project-image z-20 phone:hidden hover:scale-125 ">
        <Image
          src="/images/ac3.jpeg"
          alt="Alphacladding Desktop View"
          unsized
        />
      </div>
    </div>
  );
}
