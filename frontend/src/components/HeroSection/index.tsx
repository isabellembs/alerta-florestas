import { Button } from "@/components/ui/button";
import mapa from "/src/assets/img/mapa.png";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center gap-8 bg-[url(./src/assets/img/mapaBackground.png)] bg-cover bg-center px-6 md:px-16 py-20 font-[Poppins]">
      <div className="flex-1 text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Nossa <span className="text-[#acd137]">floresta</span><br/>não é cinza!
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Não às queimadas, <br />
          <span className="text-[#acd137] font-semibold">denuncie já!</span>
        </p>
        <Button className="bg-[#acd137] text-block hover:bg-[#c3ff00] transition-all duration-300 ease-in-out cursor-pointer hover:scale-120">
          <Link to="/denuncia">Clique aqui</Link>
        </Button>
      </div>

      <div className="flex-1">
        <img src={mapa} alt="Mapa do Brasil" className="w-full max-w-md mx-auto"/>
      </div>
    </section>
  )
}