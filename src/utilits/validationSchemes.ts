import * as Yup from "yup"
import { REG_EX_PASSWORD } from "./constants"

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required("Обязательное поле")
    .min(4, "Минимум 4 символа"),
  email: Yup.string()
    .required("Обязательное поле")
    .email("Некорректный email"),
  password: Yup.string()
    .required("Обязательное поле")
    .matches(REG_EX_PASSWORD, "Пароль должен содержать минимум 6 символов: строчные и заглавные латинские буквы," +
      " а так же цифры и спецсимволы"),
  password_confirmation: Yup.string()
    .required("Обязательное поле")
    .matches(REG_EX_PASSWORD, "Пароль должен содержать минимум 6 символов: строчные и заглавные латинские буквы," +
      " а так же цифры и спецсимволы")
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
})

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Обязательное поле")
    .email("Некорректный email"),
  password: Yup.string()
    .required("Обязательное поле")
    .min(6, "Минимум 6 символов")
})