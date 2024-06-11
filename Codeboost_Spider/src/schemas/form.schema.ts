import * as yup from "yup";

export const SchemaFormStepOne = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Campo obrigatório"),
  name: yup
    .string()
    .min(4, "Seu nome deve ter no mínimo 4 caracters.")
    .required("Digite um nome válido."),
  tel: yup
    .string()
    .min(11, "Telefone inválido.")
    .required("Este campo é obrigatório."),
});

export const SchemaFormStepTwo = yup.object().shape({
  cep: yup
    .string()
    .min(8, "O CEP deve ter 8 dígitos.")
    .required("O CEP é obrigatório."),
  uf: yup
    .string()
    .min(2, "UF deve conter o mínimo de 2 caracters.")
    .required("Campo obrigatório."),
  city: yup.string().required("Campo obrigatório."),
  road: yup
    .string()
    .min(2, "Digite o nome do seu bairro.")
    .required("Campo obrigatório.."),
  street: yup
    .string()
    .min(2, "Digite o nome da sua rua.")
    .required("Campo obrigatório."),
  numberHome: yup
    .string()
    .min(2, "Informe o número da sua casa ou apartamento.")
    .required("Campo obrigatório."),
  complement: yup.string(),
});

export const SchemaFormImage = yup.object().shape({
  proof: yup.mixed().required("Por favor, envie um arquivo de comprovante."),
});
