// Next.js libraries
import Link from "next/link";

export default function Nav(props) {
  return (
    <nav className="bg-dark w-full phone:hidden fixed top-0 z-50">
      <div
        className="container mx-auto flex justify-between uppercase text-white py-2"
        style={{ fontWeight: "800" }}
      >
        <div>
          <Link href="/">Caveman Consulting Co.</Link>
        </div>
        <div className="space-x-10">
          <Link href="/">Marketing</Link>
          <Link href="/">Web</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
