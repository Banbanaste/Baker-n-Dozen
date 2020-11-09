export default function LandingPage() {
  return (
    <section
      aria-label="Schedule an Appointment to help your business."
      className="container section-default "
    >
      <div className="rounded-full h-84 w-84 phone:w-64 phone:h-64 gradient flex flex-col justify-center items-center">
        <div className="w-96 phone:w-72 text-center leading-snug">
          <h1 className="text-5xl phone:text-3xl font-bold">
            Bring your business out of the Stone Age
          </h1>
          <p className="text-2xl phone:text-base mt-4 font-medium">
            with a modern web experience and marketing campaign anything is
            possible
          </p>
        </div>
      </div>
    </section>
  );
}
