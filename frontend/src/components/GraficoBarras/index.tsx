import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import FocoMunicipio from "../../interfaces/IFocoMunicipio";

interface GraficoBarrasProps {
  dados: FocoMunicipio[];
  total: number
}

export default function GraficoBarras({ dados, total }: GraficoBarrasProps) {
  const top10 = dados;

    return (
      <div className="bg-white p-2 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4 pl-4 font-[Poppins]">Total de Focos: <span className="text-red-500">{ total }</span></h2>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={top10}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="municipio"
              angle={-40}
              textAnchor="end"
              interval={1}
              tick={{ fontSize: 8 }}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="focos" fill="#0088FE" />
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
}
