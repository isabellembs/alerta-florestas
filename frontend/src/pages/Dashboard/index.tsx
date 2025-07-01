import { useEffect, useState } from "react";
import Destaques from "../../components/Destaques";
import GraficoBarras from "../../components/GraficoBarras";
import MainDashboard from "../../components/MainDashboard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FocoMunicipio from "../../interfaces/IFocoMunicipio";
import getFocosPorMunicipio from "../../services/focoServices";
import InfoErro from "../../components/InfoErro";

export default function Dashboard() {

  const [dados, setDados] = useState<FocoMunicipio[]>([]);
  const [totalFocos, setTotalFocos] = useState(0);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    try {
      const { dados, total } = getFocosPorMunicipio();
      setDados(dados);
      setTotalFocos(total);
    } catch {
      setErro(true);
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <MainDashboard>
        {/* Renderização condicional */}
        {erro ? (
          <InfoErro aoTentarNovamente={() => window.location.reload()} />
        ) : (
          <>
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-red-800">
              Destaques
            </h1>
            <Destaques dados={dados} />
            <GraficoBarras dados={dados} total={totalFocos} />
          </>
        )}
      </MainDashboard>
      <Footer />
    </div>
  );
}
