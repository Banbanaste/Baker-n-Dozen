// calendly
import { openPopupWidget } from "react-calendly";

// google analytics
import { logContactView } from "../../utils/analytics";

export default function ContactButton({ classes, children, sale }) {
  const handleContactClick = () => {
    openPopupWidget({
      url: !sale
        ? "https://calendly.com/cavemanconsulting"
        : "https://calendly.com/cavemanconsulting/black-friday-sale",
    });
    logContactView();
  };

  return (
    <a className={classes} onClick={handleContactClick}>
      {children}
    </a>
  );
}
