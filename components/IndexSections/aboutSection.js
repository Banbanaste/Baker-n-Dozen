// components
import CardTemplate from "../templates/cardTemplate";

export default function AboutSection() {
  return (
    <section className="" data-aos="fade">
      <div className="container section-default py-20 text-light">
        <div className="px-4">
          <h1 className="section-title phone:mb-4 phone:text-3xl phone:text-left">
            Who We Are
          </h1>
          <div className="flex flex-wrap justify-around  phone:items-center phone:justify-center">
            <div className="max-w-96 text-left space-y-10 text-2xl phone:text-xl phone:space-y-6">
              <p>
                We are Caveman Consulting Co. We play to our individual
                strengths and do what we know best. With a shared passion for
                entrepreneurship we use these strengths to help businesses grow.
                We want you to succeed, simple as that.
              </p>
              <p>
                We work with businesses of diffrent sizes and at diffrent growth
                stages. Together we create stunning web experiences and
                marketing campaigns. We collaborate with you one on one, on your
                schedule. We help you to fully take advantage of the
                technologies and strategies affored to you by todays cutting
                edge technologies.
              </p>
              <p>
                We are Caveman Consulting Co. a Marketing and Web Development
                firm that works hard for the success of its clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
