import IFocoMunicipio from "../../interfaces/IFocoMunicipio";
import Marquee from "react-fast-marquee";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface Props {
  dados: IFocoMunicipio[];
}

export default function Destaques({ dados }: Props) {
  const top5 = dados.slice(0, 5);

  const abrirGoogleMaps = (lat: number, lng: number) => {
    const url = `https://www.google.com/maps?q=${lat},${lng}&z=15`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Marquee pauseOnHover speed={80} gradient={false} direction="right">
      <div className="flex gap-6 py-4 mb-10">
        {top5.map((item, index) => (
          <Card
            key={index}
            onClick={() => abrirGoogleMaps(item.latitude, item.longitude)}
            className="w-60 cursor-pointer hover:scale-105 tracking-all duration-300 hover:shadow-2xl border-2 border-gray-100 hover:border-red-400"
            title="Clique para ver no mapa"
          >
            <CardContent className="flex flex-col items-center p-4">
              <img
                src="/src/assets/img/ilustracaoMapa.svg"
                alt="mapa"
                className="w-25 mx-auto mb-2"
              />
              <CardTitle className="text-center font-[Poppins text-gray-800">
                {item.municipio}
              </CardTitle>
              <CardDescription className="text-red-600 teext-sm text-center font-[Poppins] mb-1">
                Foco de calor: {item.focos}
              </CardDescription>
              <CardDescription className="text-gray-600 text-sm text-center font-[Poppins]">
                {item.percentual} %
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </Marquee>
  );
}
