import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("E-mail inválido.")
    .required("E-mail é obrigatório."),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 dígitos.")
    .required("Senha é obrgatória."),
});
