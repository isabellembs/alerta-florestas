import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import type { ILoginForm } from "../../interfaces/IUsuarios";

interface Props {
  onLogin: (dados: ILoginForm) => void;
  loading?: boolean;
}

export default function LoginForm({ onLogin, loading = false }: Props) {
  const [formData, setFormData] = useState<ILoginForm>({
    email: "",
    senha: "",
    lembrarMe: false,
  });
  
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erros, setErros] = useState<Partial<ILoginForm>>({});

  const validarForm = (): boolean => {
    const novosErros: Partial<ILoginForm> = {};

    if (!formData.email) {
      novosErros.email = "Email é obrigatório";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      novosErros.email = "Email inválido";
    }

    if (!formData.senha) {
      novosErros.senha = "Senha é obrigatória";
    } else if (formData.senha.length < 6) {
      novosErros.senha = "Senha deve ter pelo menos 6 caracteres";
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validarForm()) {
      onLogin(formData);
    }
  };

  const handleChange = (campo: keyof ILoginForm, valor: string | boolean) => {
    setFormData(prev => ({ ...prev, [campo]: valor }));
    // Limpa erro do campo quando usuário começa a digitar
    if (erros[campo]) {
      setErros(prev => ({ ...prev, [campo]: undefined }));
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardHeader className="text-center pb-6">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#3f6b0d] rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-2xl font-bold text-[#3f6b0d] font-[Poppins]">
          Entrar na Plataforma
        </CardTitle>
        <p className="text-gray-600 text-sm">
          Acesse sua conta para denunciar queimadas
        </p>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 font-[Poppins]">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#3f6b0d] focus:border-transparent outline-none transition-all font-[Poppins] ${
                  erros.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="seu@email.com"
                disabled={loading}
              />
            </div>
            {erros.email && (
              <p className="text-red-500 text-xs mt-1 font-[Poppins]">{erros.email}</p>
            )}
          </div>

          {/* Campo Senha */}
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1 font-[Poppins]">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                id="senha"
                type={mostrarSenha ? "text" : "password"}
                value={formData.senha}
                onChange={(e) => handleChange("senha", e.target.value)}
                className={`w-full pl-10 pr-12 py-2 border rounded-lg focus:ring-2 focus:ring-[#3f6b0d] focus:border-transparent outline-none transition-all font-[Poppins] ${
                  erros.senha ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="••••••••"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                disabled={loading}
              >
                {mostrarSenha ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {erros.senha && (
              <p className="text-red-500 text-xs mt-1 font-[Poppins]">{erros.senha}</p>
            )}
          </div>

          {/* Checkbox Lembrar-me */}
          <div className="flex items-center">
            <input
              id="lembrarMe"
              type="checkbox"
              checked={formData.lembrarMe}
              onChange={(e) => handleChange("lembrarMe", e.target.checked)}
              className="w-4 h-4 text-[#3f6b0d] border-gray-300 rounded focus:ring-[#3f6b0d]"
              disabled={loading}
            />
            <label htmlFor="lembrarMe" className="ml-2 text-sm text-gray-700 font-[Poppins]">
              Lembrar-me
            </label>
          </div>

          {/* Botão Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#3f6b0d] hover:bg-[#2d4f08] text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-[Poppins]"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Entrando...
              </div>
            ) : (
              "Entrar"
            )}
          </Button>
        </form>

        {/* Links adicionais */}
        <div className="mt-6 text-center space-y-2">
          <a
            href="#"
            className="text-sm text-[#3f6b0d] hover:underline font-[Poppins]"
            onClick={(e) => {
              e.preventDefault();
              alert("Funcionalidade em desenvolvimento");
            }}
          >
            Esqueceu sua senha?
          </a>
          <div className="text-sm text-gray-600 font-[Poppins]">
            Não tem uma conta?{" "}
            <a
              href="#"
              className="text-[#3f6b0d] hover:underline font-medium"
              onClick={(e) => {
                e.preventDefault();
                alert("Funcionalidade em desenvolvimento");
              }}
            >
              Cadastre-se
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}