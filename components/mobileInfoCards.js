// next.js
import Image from "next/image";

// components
import CardTemplate from "./cardTemplate";

// react-slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// custom arrow icons
import { NextArrow, PrevArrow } from "./arrows";

export default function AnimatedInfoCards() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="mt-6 non_phone:hidden">
      <Slider {...settings}>
        <CardTemplate
          classes="mx-auto phone:max-w-lg z-0"
          title="Marketing"
          info={[
            "Trying to attreact more clients to grow revenue? Our marketing plans are the perfect option for you. Fromn Google Advertising to Social Media, we can grow your book of business in as little as 60 days.",
          ]}
        >
          <div className="flex flex-col items-center justify-between space-y-4 py-2">
            <Image
              src="/images/google.png"
              alt="Google logo"
              width={100}
              height={30}
            />
            <Image
              src="/images/facebook.png"
              alt="Facebook logo"
              width={120}
              height={23}
            />
            <Image
              src="/images/instagram.png"
              alt="Instagram logo"
              width={110}
              height={35}
            />
            <Image
              src="/images/linkedin.png"
              alt="LinkedIn logo"
              width={110}
              height={27}
            />

            <Image
              src="/images/twitter.png"
              alt="Twitter logo"
              width={100}
              height={20}
            />
            <Image
              src="/images/reddit.png"
              alt="Reddit logo"
              width={70}
              height={20}
            />
          </div>
        </CardTemplate>
        <CardTemplate
          classes="mx-auto phone:max-w-lg"
          title="Web"
          info={[
            "We design, develop, deploy, and maintain web experiences so you can focus on growing your business. We create websites that will accomplish your goals, and increase your brand value.",
            "We want your business to seemlesly flow throughout its various touch points on the internet. A website is crucial to any business, and with the right web presentation a business can thrive.",
          ]}
        >
          <div className="flex flex-wrap items-end justify-between  space-x-2 py-2">
            <div className=" w-auto  ">
              <Image
                layout="fill"
                src="/images/js.png"
                alt="Javascript logo"
                width={50}
                height={50}
              />
            </div>
            <div className=" w-auto ">
              <Image
                layout="fill"
                src="/images/aws.png"
                alt="AWS logo"
                width={70}
                height={50}
              />
            </div>
            <div className=" w-auto ">
              <Image
                layout="fill"
                src="/images/gql.png"
                alt="GraphQL logo"
                width={50}
                height={50}
              />
            </div>
          </div>
        </CardTemplate>
      </Slider>
    </div>
  );
}
