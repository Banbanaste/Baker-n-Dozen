import Nav from '../components/nav'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'

// calendly 
import { InlineWidget } from "react-calendly";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>
          Baker & Dozen
        </title>

      </Head>
      <Nav />
      <div>
        <section 
          aria-label="Schedule an Appointment to help your business." 
          className="container mx-auto flex justify-center items-center min-h-screen mobile:flex-col mobile:justify-center "
        >
          <div className="z-10 transform -translate-y-16 mobile:translate-y-16 mobile:ml-4">
          <h1 className="text-5xl leading-tight font-extrabold tracking-wide mobile:text-4xl">
            Create new <br />and profitable <br />revenue streams<br /> for your business.
          </h1>
          <Link href="#appointment">
          <button className="transition duration-300 ease-in-out mt-4 btn from-primary to-secondary bg-gradient-to-r text-white font-bold py-2 px-4 rounded hover:shadow-xl">
            Schedule an Appointment
          </button>
          </Link>
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




        <section 
          aria-label="More Information about our services."
          className="bg-dark min-h-screen max-w-screen mobile:py-12"
        >
          <div className="container mx-auto flex flex-col  max-w-full justify-center relative overflow-x-hidden">
            <div className="self-center mb-4 z-10 -mt-24 smaller:mt-0">
            <Image 
              src="/supercup.png"
              alt="Here is a trophy for good luck"
              width="150"
              height="150"
            />
            </div>
            <h1 className="text-center font-extrabold text-white px-32 text-4xl mb-12 z-10 smaller:hidden">
              Our Services
            </h1>
            <div className="max-w-5xl mx-auto flex flex-wrap justify-between z-10 smaller:flex-col smaller:items-center w-full ">

              

              <div className="max-w-xs smaller:mx-6 smaller:max-w-lg smaller:mb-8 rounded  border-white text-white border-solid border border-opacity-25">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Marketing</div>
                  <p className="text-gray-200 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
              </div>

              <div className="max-w-xs smaller:mx-6 smaller:max-w-lg smaller:mb-8 rounded  border-white text-white border-solid border border-opacity-25">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Web Dev</div>
                  <p className="text-gray-200 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
              </div>

              <div className="max-w-xs smaller:mx-6 smaller:max-w-lg smaller:mb-8 rounded  border-white text-white border-solid border border-opacity-25">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Both</div>
                  <p className="text-gray-200 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                  </p>
                </div>
              </div>

              

            </div>

            <Link href="#appointment">
            <button className="z-10 transition duration-300 ease-in-out mt-16 smaller:mt-8 btn from-gray-200 to-gray-700 bg-gradient-to-r text-black font-bold py-2 px-16 rounded hover:shadow-xl mx-auto mobile:mb-12 mobile:hidden">
                Schedule an Appointment
              </button>
            </Link>
            

            <div className="absolute rounded-full inset-x-0 m-auto from-primary to-secondary bg-gradient-to-r opacity-75 " style={{width:"500px", height:"500px"}} />
            <div className="transform absolute rounded-full inset-x-0 m-auto from-primary to-secondary bg-gradient-to-r opacity-75 translate-x-48 -translate-y-48" style={{width:"175px", height:"175px"}} />
          </div>
        </section>




        {/* <section 
          className="bg-dark min-w-screen overflow-hidden" style={{height:"350px"}}
          aria-label="Section detailing our reviews"
        >
          <h1 className="text-center text-4xl leading-tight font-extrabold mb-8 text-white">Testimonials</h1>
          <div className="container mx-auto flex justify-center items-center ">    
           
          <div className="rounded overflow-hidden border-white text-white border-solid border border-opacity-50 px-20 py-12 z-10 smaller:mx-6">

          <div className="text-xl">
          <p className="text-white font-bold max-w-3xl">Awesome communication and fast turn around, easy to deal with and overall satisfied. Can't wait to expand our business with <i>[their]</i> help. Thanks again!</p>
          <p className="text-white text-opacity-50 mt-4">PETER, OAKMONT LAWN SERVICES</p>     
          </div>
          
          
          </div>
          <div className="transform absolute rounded-full from-primary to-secondary bg-gradient-to-r opacity-75" style={{width:"400px", height:"400px", zIndex:"0"}} />
          </div>
        </section> */}



        <section 
          aria-label="Schedule an Appointment to help your business." 
          id="appointment"
        >
          {/* <!-- Calendly inline widget begin --> */}
          {/* <h1 className="text-center text-5xl leading-tight font-extrabold">Schedule an Appointment</h1> */}
          <div className="h-screen mobile:h-cmobile">
          <InlineWidget url="https://calendly.com/consultaion_test/marketing" styles={{ height:"100%" }} />
          </div>
          
          {/* <!-- Calendly inline widget end --> */}
        </section>
      </div>
    </>
  )
}
