export default function CardTemplate(props) {
  return (
    <div
      className={`rounded-lg bg-light w-72 non_phone:shadow-xl mb-10 ${props.classes}`}
    >
      <div className="p-8">
        <h1 className="font-bold text-lg mb-4">{props.title}</h1>
        <p>{props.info[0]}</p>
        {props.info[1] && <p className="mt-4">{props.info[1]}</p>}
      </div>
      <div className="w-full rounded-b-lg p-4 opaque_gradient">
        {props.children}
      </div>
    </div>
  );
}
