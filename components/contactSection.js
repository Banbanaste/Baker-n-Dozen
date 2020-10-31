// calendly 
import { openPopupWidget } from "react-calendly";

export default function ContactBtn() {

  const calendlyClick = () => {
    openPopupWidget({url: "https://calendly.com/consultaion_test/marketing"})
  }

  return (
    <button className="transition duration-300 ease-in-out mt-4 btn from-primary to-secondary bg-gradient-to-r text-white font-bold py-2 px-4 rounded hover:shadow-xl" onClick={calendlyClick}>
      Schedule an Appointment
    </button>
  )
}