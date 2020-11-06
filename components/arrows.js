import { GiStoneSpear } from "react-icons/gi";

export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`text-5xl z-50 absolute`}
      style={{
        ...style,
        display: "inline-block",
        transform: "rotate(135deg)",
        top: "60%",
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
      className={`transform -rotate-45 text-5xl z-50 absolute `}
      style={{
        ...style,
        display: "inline-block",
        top: "60%",
        right: "15px",
      }}
      onClick={onClick}
    >
      <GiStoneSpear />
    </div>
  );
}
