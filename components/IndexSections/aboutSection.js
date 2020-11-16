// components
import CardTemplate from "../templates/cardTemplate";

export default function AboutSection() {
  return (
    <section className="bg-light" id="about">
      <div className="container section-default py-32">
        <div>
          <h1
            className="section-title phone:mb-4 text-dark"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            Who We Are
          </h1>
          <div className="flex flex-wrap justify-around  phone:items-center phone:justify-center">
            <span
              className="z-20"
              data-aos="fade-down"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              <CardTemplate
                classes="shadow-xl z-20 max-w-96 w-full bg-burg text-white"
                title="Caveman Consulting Co."
                info={[
                  "We are Brandon Ward & Roberto Banbanaste. Buddies from college, anytime we spent away from the bars was ideating on how we could start a business. A business that played to our individual strengths. With a shared passion for entrepreneurship we landed on Caveman Consulting Co.",
                  "Now we spend our time working with businesses of diffrent sizes and at diffrent growth stages. Together we create stunning web experiences and marketing campaings. We collaborate with you one on one, on your schedule. We help you to fully take advantage of the technologies and strategies affored to you by todays cutting edge technologies.",
                  "We are Caveman Consulting Co. and we are here to fully support your online endeavors. ",
                ]}
              ></CardTemplate>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
