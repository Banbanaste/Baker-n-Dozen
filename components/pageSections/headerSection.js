// calendy
// import ContactButton from "../templates/contactButton";

export default function HeaderSection({
  setShowMenu,
  bgColor,
  textColor,
  title,
  text,
  btnClass,
}) {
  return (
    <section
      style={{
        background: "url('images/cave_bg.svg')",
        backgroundColor: bgColor,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="items-start py-32 bg-cover bg-center bg-no-repeat"
    >
      <div className="container mx-auto pt-6 space-y-16 flex flex-col justify-center items-center z-20">
        <div
          className={`${textColor} text-center max-w-100 mx-auto text-xl phone:text-lg`}
        >
          <h1
            className="text-5xl font-bold mb-8 text-center phone:text-3xl"
            data-aos="fade-down"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            {title}
          </h1>
          <p
            className="mb-12"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            {text}
          </p>
          <span
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="500"
            data-aos-easing="ease"
            data-aos-once="true"
          >
            {/* <ContactButton classes={btnClass}>
              Schedule a Consultaion Now
            </ContactButton> */}
            <a onClick={() => setShowMenu(true)} className={btnClass}>
              Contact us Today :)
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
