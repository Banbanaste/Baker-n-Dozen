// Next.js libraries
import Image from 'next/image'

// components
import ContactBtn from "./contactSection"

// calendly 
import { openPopupWidget } from "react-calendly";

export default function LandingPage() {
  
  return (
    <section 
          aria-label="Schedule an Appointment to help your business." 
          className="container mx-auto flex justify-center items-center min-h-screen mobile:flex-col mobile:justify-center "
        >
          <div className="z-10 transform -translate-y-16 mobile:translate-y-16 mobile:ml-4">
          <h1 className="text-5xl leading-tight font-extrabold tracking-wide mobile:text-4xl">
            Create new <br />and profitable <br />revenue streams<br /> for your business.
          </h1>
          
          <ContactBtn />

          </div>
          <div className="transform mt-64 -ml-32 mobile:m-0 mobile:w-1/2 mobile:translate-x-16 mobile:translate-y-8">
            <Image 
              src="/target.png"
              alt="Icon of a bullseye"
              width="400"
              height="400"
            />
          </div>
        </section>
  )
}