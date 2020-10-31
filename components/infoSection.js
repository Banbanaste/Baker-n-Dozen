// Next.js libraries
import Link from 'next/link'
import Image from 'next/image'

// components
import InfoCard from "./infoCard"

export default function InfoSection() {
  return (
    <section 
          aria-label="More Information about our services."
          className="bg-dark min-h-screen max-w-screen mobile:py-12"
    >
        <div className="container mx-auto flex flex-col min-h-screen  max-w-full justify-center relative overflow-x-hidden">
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
                <InfoCard title="marketing">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </InfoCard>
                <InfoCard title="web">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </InfoCard>
                <InfoCard title="both">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </InfoCard>
            </div>

            <div className="absolute rounded-full inset-x-0 m-auto from-primary to-secondary bg-gradient-to-r opacity-75 " style={{width:"500px", height:"500px"}} />
            <div className="transform absolute rounded-full inset-x-0 m-auto from-primary to-secondary bg-gradient-to-r opacity-75 translate-x-48 -translate-y-48" style={{width:"175px", height:"175px"}} />
        </div>
    </section>
  )
}