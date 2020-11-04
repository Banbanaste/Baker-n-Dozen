// components
import Nav from "../components/nav";
import BottomNav from "../components/bottomNav";

export default function WebPage() {
  return (
    <>
      <Nav a="home" b="marketing" c="both" />
      <h1 className="text-center text-5xl font-extrabold">Web</h1>
      <BottomNav a="home" b="marketing" c="both" />
    </>
  );
}
