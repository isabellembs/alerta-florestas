export default interface IUsuario {
  id?: string;
  nome: string;
  email: string;
  senha?: string;
  avatar?: string;
  dataCriacao?: Date;
  ultimoLogin?: Date;
}

export interface ILoginForm {
  email: string;
  senha: string;
  lembrarMe?: boolean;
}

export interface ILoginResponse {
  sucesso: boolean;
  usuario?: IUsuario;
  token?: string;
  mensagem?: string;
}