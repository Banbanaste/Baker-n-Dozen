// Next.js libraries
import Link from 'next/link'

export default function InfoCard(props) {
  return (
    <div className="max-w-xs smaller:mx-6 smaller:max-w-lg smaller:mb-8 rounded  border-white text-white border-solid border border-opacity-25">
        <div className="px-6 py-4">
            <h1 className="font-bold text-xl mb-2 capitalize">{props.title}</h1>
            <p className="text-gray-200 text-base">
                {props.children}
            </p>
            <Link href={props.title}>
                <button className="z-10 transition duration-300 ease-in-out mt-6 smaller:mt-8 btn from-gray-200 to-gray-700 bg-gradient-to-r text-black font-bold py-2 px-2 rounded hover:shadow-xl">
                    more info
                </button>
            </Link>
        </div>
    </div>
  )
}