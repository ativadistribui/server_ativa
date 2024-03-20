import * as yup from "yup";

export const loginSerializer = yup.object().shape({
  email: yup.string().email().required("Email é obrigatorio"),
  password: yup.string().required("Senha é obrigatoria"),
});
