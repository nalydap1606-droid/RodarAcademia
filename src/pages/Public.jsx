import Navbar from "../components/Public/navbar.jsx";
import { Hero } from "../components/Public/hero.jsx";
import MisionVision from "../components/Public/mision&vision.jsx";

function Public() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {" "}
      {/* El color crema de fondo de tu diseño */}
      <Navbar />
      <Hero />
      <MisionVision />
    </div>
  );
}

export default Public;
