export default function Subsection({ sectionClass, divClass, title, text }) {
  return (
    <section className={sectionClass}>
      <div
        className="container px-10 mx-auto text-xl phone:text-lg"
        data-aos="fade"
      >
        <div className={divClass}>
          <h2 className="text-3xl phone:text:2xl font-bold uppercase mb-6">
            {title}
          </h2>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}
