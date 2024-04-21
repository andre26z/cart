// file path: /utils/input-rules.js

export const inputRules = {
  fullName: {
    validate: (value) => /^[a-zA-Z]+\s[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(value),
    message:
      "Nome completo deve conter apenas letras e ter pelo menos dois nomes.",
  },
  cardNumber: {
    validate: (value) => /^\d{13,16}$/.test(value),
    message: "Número do cartão deve conter entre 13 e 16 dígitos.",
  },
  cpf: {
    validate: (value) => /^\d{11}$/.test(value),
    message: "CPF deve conter exatamente 11 dígitos.",
  },
  expirationDate: {
    validate: (value) => /^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(value),
    message: "Validade deve estar no formato MM/AA.",
  },
  cvv: {
    validate: (value) => /^\d{3}$/.test(value),
    message: "CVV deve conter exatamente 3 dígitos.",
  },
};
