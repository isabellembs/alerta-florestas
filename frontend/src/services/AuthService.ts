import { api } from "@/config/api"
import type { ILoginRequest, ILoginResponse } from "@/interfaces/IAuth"

class AuthService {
  async login(credentials: ILoginRequest): Promise<ILoginResponse> {
    try {
      const response = await api.post("/login", credentials)
      
      // Salvar no localStorage
      localStorage.setItem("token", response.data.token)
      localStorage.setItem("user", JSON.stringify(response.data.usuario))
      
      return response.data
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Erro ao fazer login")
    }
  }

  logout(): void {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.href = "/login"
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token")
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user")
    return userStr ? JSON.parse(userStr) : null
  }
}

export default new AuthService()