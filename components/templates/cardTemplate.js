export default function CardTemplate(props) {
  return (
    <div
      className={`transform rounded-lg bg-white w-78 bg-opacity-50 cursor-pointer hover:shadow-none duration-300 non_phone:hover:scale-150 ${props.classes}`}
      style={{ backdropFilter: "blur(30px)" }}
    >
      <div className="p-8">
        <h1 className="font-bold text-lg mb-4">{props.title}</h1>
        <p>{props.info[0]}</p>
        {props.info[1] && <p className="mt-4">{props.info[1]}</p>}
      </div>
      <div className="w-full rounded-b-lg p-4 bg-gray-400 bg-opacity-50">
        {props.children}
      </div>
    </div>
  );
}
