import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#082916] text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="flex flex-col items-center md:items-start">
          <img
            src="../src/assets/img/logoDesafio5-2.png"
            alt="Logo alerta florestas"
            className="w-28 mb-4"
          />
          <p className="text-center md:text-left text-sm font-[Poppins]">
            Monitoramento inteligente para proteção ambiental.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 font-[Poppins]">
            Links úteis
          </h4>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-green-400 transition-colors">
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-green-400 transition-colors"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/denuncia"
                className="hover:text-green-400 transition-colors"
              >
                Denuncie já!
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="hover:text-green-400 transition-colors"
              >
                Sobre
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 font-[Poppins]">
            Fontes de Dados
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-400 transition-colors">
                IBGE
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition-colors">
                Brasi.IO
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400 transition-colors">
                INPE
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 font-[Poppins]">Contato</h4>
          <p className="text-sm mb-3">contato@alertafloresta.com.br</p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-green-400 transition-colors text-xl"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/desafio-05-trilhas/front-end"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors text-xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-400 transition-colors text-xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400 font-[Poppins]">
        © 2025 Alerta Florestas — Todos os direitos reservados
      </div>
    </footer>
  );
}
