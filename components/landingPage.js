// components
import InfoCard from "./infoCard";
import ContactButton from "./contactButton";

export default function LandingPage() {
  return (
    <section
      aria-label="Schedule an Appointment to help your business."
      className="phone:pb-16 phone:pt-12"
    >
      <div className="mobile:w-full">
        <div className="bg-black pt-12 pb-24 w-full">
          <div className="container mx-auto px-4 text-5xl text-white">
            <h1 className="leading-snug font-semibold capitalize italic underline ">
              We create web experiences and marketing campaings for your
              business
            </h1>
          </div>
        </div>
        <div className="pt-8  px-4 justify-between">
          <div className="container mx-auto">
            <InfoCard title="marketing" icon="/megaphone.png">
              <div className="mb-2 text-gray-800">
                <p className="mb-2">
                  Trying to attract more clients to grow revenue? Our marketing
                  plans are the perfect option for you. From Google Advertising
                  to Social Media we can grow your book of business in as little
                  as 60 days.
                </p>
              </div>
            </InfoCard>
            <InfoCard title="web" icon="/phone.png">
              <div className="mb-2 text-gray-800">
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
              </div>
            </InfoCard>
            <InfoCard title="both" icon="/supercup.png">
              <div className="mb-2 text-gray-800">
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
              </div>
            </InfoCard>
          </div>
          {/* <div className="w-1/2 h-auto gradBody"></div> */}
        </div>
      </div>
    </section>
  );
}
