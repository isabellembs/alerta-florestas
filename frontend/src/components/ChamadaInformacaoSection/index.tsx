import { Button } from "@/components/ui/button";

export default function ChamadaIformacaoSection() {
  return (
    <section className="bg-[#acd137] py-12 text-center px-4 font-[Poppins]">
      <h3 className="text-3xl font-bold mb-4">
        Informação que gera ação
      </h3>
      <p className="text-lg font-medium max-w-3xl mx-auto">
        O objetivo é fortalecer a participação social e o combate às queimadas por meio da informação, da transparência e da ação coletiva.
      </p>
      <div className="mt-6">
        <Button className="bg-[#3f6b0d] text-white hover:bg-[#c3ff00] transition-all duration-300 ease-in-out cursor-pointer hover:scale-110">
          Fique por dentro!
        </Button>
      </div>

    </section>
  )
}