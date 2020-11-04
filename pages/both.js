// components
import Nav from "../components/nav";
import BottomNav from "../components/bottomNav";

export default function BothPage() {
  return (
    <>
      <Nav a="home" b="marketing" c="web" />
      <h1 className="text-center text-5xl font-extrabold">Marketing & Web</h1>
      <BottomNav a="home" b="marketing" c="web" />
    </>
  );
}
