export default function CardTemplate(props) {
  return (
    <div
      className={`flex flex-col justify-between text-white ${props.classes}`}
    >
      <div className="p-8 text-xl">
        <h1 className="font-bold text-2xl mb-4">{props.title}</h1>
        <p>{props.info[0]}</p>
        {props.info[1] && <p className="mt-4">{props.info[1]}</p>}
        {props.info[2] && <p className="mt-4">{props.info[2]}</p>}
      </div>
      <div className="">{props.children}</div>
    </div>
  );
}
