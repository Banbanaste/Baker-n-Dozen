// calendly
import { openPopupWidget } from "react-calendly";

// google analytics
import { logContactView } from "../../utils/analytics";

export default function ContactButton({ classes, children }) {
  const handleContactClick = () => {
    openPopupWidget({
      url: "https://calendly.com/cavemanconsulting/caveman-consultation",
    });
    logContactView();
  };

  return (
    <a className={classes} onClick={handleContactClick}>
      {children}
    </a>
  );
}
