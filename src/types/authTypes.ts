export interface IRegisterData {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export interface ILoginData {
  email: string
  password: string
}

export interface IAuthResponse {
  token: string
}