import Focos from "../data/dados_queimadas_28_06_2025.json";
import IFoco from "../interfaces/IFoco";
import IFocoMunicipio from "../interfaces/IFocoMunicipio";

type ResultadoFocos = {
  dados: IFocoMunicipio[];
  total: number;
}

export default function getFocosPorMunicipio(): ResultadoFocos {

  // Cria um objeto para contar focos por município
  const focos = (Focos as { features: IFoco[] }).features;
  console.log(focos);
  const contagem: Record<string, IFocoMunicipio> = {};

  // Percorre cada foco individualmente
  focos.forEach((foco) => {
    const mun = foco.properties.Municipio;
    const lat = foco.properties.Latitude;
    const lon = foco.properties.Longitude;

    // Se ainda não existe esse município no objeto, cria com dados iniciais
    if (!contagem[mun]) {
      contagem[mun] = {
        municipio: mun,
        focos: 0,
        percentual: 0,
        latitude: lat,
        longitude: lon,
      };
    }

    // Incrementa a contagem de focos para o município atual
    contagem[mun].focos++;
  });

  // Total geral de focos
  const total = focos.length;

  // Transforma o objeto em array e calcula o percentual de cada município
  const dados = Object.values(contagem).map((item) => ({
    ...item,
    percentual: Number(((item.focos / total) * 100).toFixed(2)),
  }));

  // Ordena os municípios em ordem descrescente de focos
  const dadosOrdenados = dados.sort((a, b) => b.focos - a.focos);

  // Retorna o array final e o total geral
  return { dados: dadosOrdenados, total };
}
