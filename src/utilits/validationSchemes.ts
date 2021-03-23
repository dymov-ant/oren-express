import * as Yup from "yup"
import { regExPassword } from "./constants"

export const registerSchema = Yup.object().shape({
  email: Yup.string()
    .required("Обязательное поле")
    .email("Некорректный email"),
  password: Yup.string()
    .required("Обязательное поле")
    .matches(regExPassword, "Пароль должен содержать минимум 6 символов: строчные и заглавные латинские буквы," +
      " а так же цифры и спецсимволы"),
  password2: Yup.string()
    .required("Обязательное поле")
    .matches(regExPassword, "Пароль должен содержать минимум 6 символов: строчные и заглавные латинские буквы," +
      " а так же цифры и спецсимволы")
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
})