import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";
import type { ILoginForm, ILoginResponse } from "../../interfaces/IUsuarios";

// Simulação de serviço de autenticação
const simularLogin = async (dados: ILoginForm): Promise<ILoginResponse> => {
  // Simula delay de rede
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulação simples - em produção, fazer requisição real
  if (dados.email === "admin@alertaflorestas.com" && dados.senha === "123456") {
    return {
      sucesso: true,
      usuario: {
        id: "1",
        nome: "Administrador",
        email: dados.email,
        avatar: "/src/assets/img/avatar-default.png",
        ultimoLogin: new Date(),
      },
      token: "fake-jwt-token-123",
      mensagem: "Login realizado com sucesso!",
    };
  }

  return {
    sucesso: false,
    mensagem: "Email ou senha incorretos",
  };
};

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState<{ tipo: "sucesso" | "erro"; texto: string } | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (dados: ILoginForm) => {
    setLoading(true);
    setMensagem(null);

    try {
      const resultado = await simularLogin(dados);

      if (resultado.sucesso) {
        // Em produção, salvar token no localStorage/sessionStorage
        if (dados.lembrarMe) {
          localStorage.setItem("authToken", resultado.token || "");
          localStorage.setItem("usuario", JSON.stringify(resultado.usuario));
        } else {
          sessionStorage.setItem("authToken", resultado.token || "");
          sessionStorage.setItem("usuario", JSON.stringify(resultado.usuario));
        }

        setMensagem({
          tipo: "sucesso",
          texto: resultado.mensagem || "Login realizado com sucesso!",
        });

        // Redirecionar após 1 segundo
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setMensagem({
          tipo: "erro",
          texto: resultado.mensagem || "Erro ao fazer login",
        });
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setMensagem({
        tipo: "erro",
        texto: "Erro interno. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Mensagem de feedback */}
          {mensagem && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-medium font-[Poppins] ${
                mensagem.tipo === "sucesso"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {mensagem.texto}
            </div>
          )}

          <LoginForm onLogin={handleLogin} loading={loading} />
        </div>
      </main>

      <Footer />
    </div>
  );
}