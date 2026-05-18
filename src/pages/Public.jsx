import Navbar from "../components/Public/Navbar.jsx";
import { Hero } from "../components/Public/Hero.jsx";
import MisionVision from "../components/Public/Mision&Vision.jsx";
import SeccionEventos from "../components/Public/eventos.jsx";

function Public() {
  return (
    // CORRECCIÓN: Agregado 'flex' y un 'gap-16' para dar espacio vertical limpio
    <div className="flex flex-col gap-16 min-h-screen bg-[#FFFBF4] py-8">
      <Navbar />
      <Hero />
      <MisionVision />
      <SeccionEventos />
    </div>
  );
}

export default Public;