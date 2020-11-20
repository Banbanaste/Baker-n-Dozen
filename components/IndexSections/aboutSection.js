// components
import CardTemplate from "../templates/cardTemplate";

export default function AboutSection() {
  return (
    <section className="">
      <div className="container section-default py-20 text-light">
        <div className="px-4">
          <h1
            className="section-title phone:mb-4 phone:text-3xl phone:text-left"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            Who We Are
          </h1>
          <div className="flex flex-wrap justify-around  phone:items-center phone:justify-center">
            <div className="max-w-96 text-left space-y-10 text-2xl phone:text-xl phone:space-y-6">
              <p
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                We are Brandon Ward & Roberto Banbanaste. Buddies from college,
                anytime we spent away from the bars was ideating on how we could
                start a business. A business that played to our individual
                strengths. With a shared passion for entrepreneurship we landed
                on Caveman Consulting Co.
              </p>
              <p
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                Now we spend our time working with businesses of diffrent sizes
                and at diffrent growth stages. Together we create stunning web
                experiences and marketing campaigns. We collaborate with you one
                on one, on your schedule. We help you to fully take advantage of
                the technologies and strategies affored to you by todays cutting
                edge technologies.
              </p>
              <p
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="500"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                We are Caveman Consulting Co. and we are here to fully support
                your online endeavors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
