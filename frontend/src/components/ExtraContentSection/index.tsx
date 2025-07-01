import { CloudSun, HeartPulse, Leaf, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import imgBombeiros from "/src/assets/img/bombeiros.png";
export default function ExtraContentSection() {
  return (
    <section className="py-12 bg-white px-4 text-center font-[Poppins]">
      {/* Bloco 1 */}
      <div className="flex flex-col md:flex-row items-center gap-6 max-w-6xl mx-auto mb-12">
        <div className="flex-1 text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-[#3f6b0d] mb-4">
            O que são queimadas?
          </h3>
          <p className="mb-2 text-gray-700">
            As <strong>queimadas</strong> são focos de fogo em áreas de
            vegetação, muitas vezes iniciados de forma ilegal ou imprudente.
            Elas podem ocorrer por diversos motivos:{" "}
            <strong>
              limpeza de terrenos, abertura de áreas para pastagem, queima de
              lixo ou até ações criminosas.
            </strong>
          </p>
          <p className="text-gray-700">
            Embora algumas sejam provocadas por fenômenos naturais (como raios),
            a maior parte das queimadas no Brasil é causada por ações humanas.
            Quando não controladas, elas se transformam em{" "}
            <strong>
              incêndios florestais, causando destruição e colocando vidas em
              risco.
            </strong>
          </p>
        </div>
        <div className="flex-1">
          <img src={imgBombeiros} alt="Imagem de bombeiros apagando fogo" className="rounded-xl w-full h-auto object-cover"/>
        </div>
      </div>

      {/* Bloco 2 */}
      <h3 className="text-2xl md:text-3xl font-bold text-[#3f6b0d] mb-8">Por que é importante saber se prevenir?</h3>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {[
          {
            title: "Danos à saúde",
            icon: <HeartPulse className="w-6 h-6 text-[#3f6b0d]" />,
            text: "A fumaça liberada agrava problemas respiratórios, especialmente em crianças e idosos A poluição do ar atinge até cidades distantes do foco da queimada.",
          },
          {
            title: "Perda da biodiversidade",
            icon: <Leaf className="w-6 h-6 text-[#3f6b0d]" />,
            text: "Animais silvestres morrem queimados ou perdem seus habitats; Plantas e ecossistemas inteiros são destruídos;",
          },
          {
            title: "Clima e solo em risco",
            icon: <CloudSun className="w-6 h-6 text-[#3f6b0d]" />,
            text: "As queimadas liberam grandes quantidades de CO₂, contribuindo para o aquecimento global; O solo perde nutrientes e fica mais vulnerável à erosão e desertificação.",
          },
          {
            title: "Impacto nas comunidades",
            icon: <Users className="w-6 h-6 text-[#3f6b0d]" />,
            text: "Povos indígenas, agricultores e moradores de áreas rurais são diretamente atingidos; A economia local sofre com a destruição de lavouras, pastos e florestas.",
          },
        ].map((item, index) => (
          <Card key={index} className="w-full md:w-64 bg-[#e5f5d5] hover:scale-105 transition-transform">
            <CardHeader className="flex flex-col items-center">
              { item.icon }
              <CardTitle className="text-md text-center"> {item.title} </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-sm text-center"> {item.text} </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bloco 3 */}
      <h3 className="text-2xl md:text3xl font-bold text-[#3f6b0d]"> O que podemos faze para ajudar? </h3>
    </section>
  );
}
