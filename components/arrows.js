import { GiStoneSpear } from "react-icons/gi";

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`text-4xl z-50 absolute opacity-25`}
      style={{
        ...style,
        display: "inline-block",
        transform: "rotate(135deg)",
        top: "40%",
        left: "15px",
      }}
      onClick={onClick}
    >
      <GiStoneSpear />
    </div>
  );
}

export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`transform -rotate-45 text-4xl z-50 absolute  opacity-25`}
      style={{
        ...style,
        display: "inline-block",
        top: "40%",
        right: "15px",
      }}
      onClick={onClick}
    >
      <GiStoneSpear />
    </div>
  );
}
