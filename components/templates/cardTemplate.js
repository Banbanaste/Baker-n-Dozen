export default function CardTemplate(props) {
  return (
    <div
      className={`transform bg-white rounded cursor-pointer phone:hover:shadow-none duration-500 non_phone:hover:scale-125 ease-in-out flex flex-col justify-between ${props.classes}`}
    >
      <div className="p-8">
        <h1 className="font-bold text-lg mb-4">{props.title}</h1>
        <p>{props.info[0]}</p>
        {props.info[1] && <p className="mt-4">{props.info[1]}</p>}
        {props.info[2] && <p className="mt-4">{props.info[2]}</p>}
      </div>
      <div className="w-full  bg-gray-400 bg-opacity-50 rounded-b">
        {props.children}
      </div>
    </div>
  );
}
