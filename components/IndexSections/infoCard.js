// next.js
import Link from "next/link";

export default function InfoCard({ to, click, children }) {
  return (
    <Link href={to}>
      <div
        className="text-xl phone:text-lg mb-4 cursor-pointer bg-dark p-6 rounded bg-opacity-75 hover:opacity-50 duration-300"
        onClick={click}
      >
        {children}
      </div>
    </Link>
  );
}
