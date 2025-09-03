import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Informe o nome."),
  email: yup.string().email("E-mail inválido.").required("Informe o e-mail."),
  password: yup
    .string()
    .min(6, "A senha deve ter no mínimo 6 dígitos.")
    .required("Informe uma senha."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "A senhas devem ser iguais.")
    .required("Confirme a senha."),
});
