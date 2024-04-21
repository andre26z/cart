// file path: /utils/input-rules.js

export const inputRules = {
  fullName: {
    validate: (value) => /^[a-zA-Z]+\s[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(value),
    message:
      "Nome completo deve conter apenas letras e ter pelo menos um sobrenome.",
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
    validate: (value) => {
      const regex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
      if (!regex.test(value)) {
        return false;
      }
      const [month, year] = value.split("/");
      const currentYear = new Date().getFullYear() % 100; // get last two digits
      const currentMonth = new Date().getMonth() + 1;
      const inputYear = parseInt(year, 10);
      const inputMonth = parseInt(month, 10);

      // Check if the year is current year but month is already past or year is less than current year
      if (
        inputYear < currentYear ||
        (inputYear === currentYear && inputMonth < currentMonth)
      ) {
        return false;
      }
      return true;
    },
    message: "Validade deve estar no formato MM/AA e deve ser uma data futura.",
  },
  cvv: {
    validate: (value) => /^\d{3}$/.test(value),
    message: "CVV deve conter exatamente 3 dígitos.",
  },
};
