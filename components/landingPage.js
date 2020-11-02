// components
import InfoCard from "./infoCard";

// calendly
import { openPopupWidget } from "react-calendly";

export default function LandingPage() {
  const calendlyClick = () => {
    openPopupWidget({ url: "https://calendly.com/consultaion_test/marketing" });
  };

  return (
    <section
      aria-label="Schedule an Appointment to help your business."
      className="container mx-auto px-4 phone:pb-32"
    >
      <div className="larger:max-w-850 mobile:w-full">
        <h1 className="text-4xl font-bold pt-10 leading-none">
          Create profitable revenue streams for your business.
        </h1>
        <div className="flex flex-wrap pt-8">
          <InfoCard title="marketing" icon="/megaphone.png">
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </InfoCard>
          <InfoCard title="web" icon="/phone.png">
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </InfoCard>
          <InfoCard title="both" icon="/supercup.png">
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </InfoCard>
          <a
            className="hover:underline text-very_blue text-5xl font-bold leading-none tracking-wider cursor-pointer mt-10 ml-10 phone:hidden"
            onClick={calendlyClick}
          >
            Schedule an <br />
            Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
