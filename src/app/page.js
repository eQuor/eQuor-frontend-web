import Navbar from "./components/Navbar/page";
import SideNav from "./components/SideNav/page";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Navbar />
        <div className="absolute top-20">
          <SideNav />
        </div>
      </div>
    </main>
  );
}
