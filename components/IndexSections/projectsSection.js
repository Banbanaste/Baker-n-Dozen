// next.js
import Image from "next/image";
import Link from "next/link";

// components
import ProjectTemplate from "../templates/projectTemplate";
import ProjectCardTemplate from "../templates/projectCardTemplate";

export default function ProjectSection() {
  return (
    <section
      aria-label="Schedule an Appointment to help your business."
      className="bg-light min-h-screen pb-20"
      id="projects"
    >
      <div className="container mx-auto flex justify-center items-start pt-32">
        <div className="w-full">
          <h1
            className="section-title text-burg text-left ml-4 mb-8"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            Projects
          </h1>
          <div className="flex flex-wrap">
            <Link href="/alphacladding">
              <a>
                <ProjectCardTemplate title="ALPHACLADDING" delay="2">
                  <div className="">
                    <Image
                      src="/images/ac_head.png"
                      alt="Instagram logo"
                      loading="eager"
                      unsized
                    />
                  </div>
                </ProjectCardTemplate>
              </a>
            </Link>
          </div>
          {/* <ProjectTemplate /> */}
        </div>
      </div>
    </section>
  );
}
