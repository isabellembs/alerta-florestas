export interface ILoginRequest {
  email: string
  senha: string
}

export interface ILoginResponse {
  token: string
  usuario: IUsuario
}

export interface IUsuario {
  id_usuario: string
  nome: string
  email: string
}