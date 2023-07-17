import Navbar from "./components/Navbar/page";
import SideNav from "./components/SideNav/page";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Navbar className="" />
        <SideNav className="absolute top-11 bg-red-800" />
      </div>
    </main>
  );
}
