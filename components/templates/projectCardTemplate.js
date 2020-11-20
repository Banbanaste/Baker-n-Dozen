export default function ProjectCardTemplate(props) {
  return (
    <div
      className="transform bg-ruby text-light cursor-pointer max-w-72 relative m-4"
      data-aos="fade-down"
      data-aos-delay={`${props.delay}00`}
      data-aos-duration="500"
      data-aos-easing="ease"
      data-aos-once="true"
    >
      <div className="duration-300 ease-in-out absolute text-light z-50 w-full h-full flex justify-center items-center text-4xl font-bold projectCover">
        More Info
      </div>
      <div>
        <div className="py-8">
          <h1 className="font-bold text-2xl text-center tracking-widest">
            {props.title}
          </h1>
        </div>
        <div className="w-full max-w-88 z-0">{props.children}</div>
      </div>
    </div>
  );
}
