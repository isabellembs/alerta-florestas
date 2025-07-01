import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import postivio from "/src/assets/icons/positivo.png";

export default function PublicoAlvoSection() {
  const items = [
    {
      title: "Cidadãos conscientes",
      text: "Esta plataforma é destinada a cidadãos que desejam se informar sobre os impactos das queimadas e contribuir para sua prevenção.",
    },
    {
      title: "Jovens e adultos em busca de dados e ferramentas",
      text: "Permite a busca de dados atualizados, informações confiáveis e ferramentas práticas para denunciar queimadas — de forma anônima ou identificada.",
    },
    {
      title: "Educadores, estudantes e gestores",
      text: "É um recurso útil para professores, estudantes, pesquisadores e gestores públicos que necessitam de acesso a indicadores socioambientais e materiais de apoio sobre o tema.",
    },
  ];

  return (
    <section className="py-16 bd-[#f8faff] text-center font-[Poppins]">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#3f6b0d] mb-10">
        Para quem é essa plataforma?
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {items.map((item, index) => (
          <Card key={index} className="w-full md:w-80 hover:scale-105 transition-transform cursor-pointer">
            <CardHeader>
              <img src={postivio} alt="Ícone positivo" className="w-10 mx-auto mb-2"/>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-lg text-center">{ item.text }</p>
            </CardContent>
          </Card>
        )) }
      </div>
    </section>
  );
}
