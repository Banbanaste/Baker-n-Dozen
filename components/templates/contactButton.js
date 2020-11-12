// calendly
import { openPopupWidget } from "react-calendly";

export default function ContactButton({ classes, children }) {
  const calendlyClick = () => {
    openPopupWidget({ url: "https://calendly.com/consultaion_test/marketing" });
  };

  return (
    <a className={classes} onClick={calendlyClick}>
      {children}
    </a>
  );
}
