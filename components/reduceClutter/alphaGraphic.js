// next.js
import Image from "next/image";

export default function AlphaGraphic() {
  return (
    <div className="flex justify-start px-4 pt-8 phone:pt-0">
      <div
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-once="true"
      >
        <div className="project-image non_phone:hover:scale-125">
          <Image
            src="/images/ac2.png"
            alt="Alphacladding Desktop View"
            unsized
          />
        </div>
      </div>
      <div
        className="z-20"
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-once="true"
      >
        <div className="project-image phone:hidden hover:scale-125 -ml-20 -mt-8 shadow-xl">
          <Image
            src="/images/ac1.png"
            alt="Alphacladding Desktop View"
            unsized
          />
        </div>
      </div>
      <div
        className="z-10"
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="500"
        data-aos-easing="ease"
        data-aos-once="true"
      >
        <div className="project-image phone:hidden hover:scale-125 -ml-20">
          <Image
            src="/images/ac3.png"
            alt="Alphacladding Desktop View"
            unsized
          />
        </div>
      </div>
    </div>
  );
}
