<template>
  <div>
    <h3 v-if="!paymentSuccess" class="text-lg font-bold mb-5">
      Preencha os dados de pagamento
    </h3>
    <form v-if="!paymentSuccess" @submit.prevent="submitCreditCardForm">
      <div class="input-group mb-3">
        <label for="fullName" class="font-bold">Nome completo</label>
        <input
          type="text"
          v-model="creditCard.fullName"
          @blur="validateInput('fullName')"
          required
        />
        <span v-if="errors.fullName" class="text-red-500">{{
          errors.fullName
        }}</span>
      </div>
      <div class="input-group mb-3">
        <label for="cardNumber" class="font-bold">Número do cartão</label>
        <input
          type="text"
          v-model="creditCard.cardNumber"
          @blur="validateInput('cardNumber')"
          required
        />
        <span v-if="errors.cardNumber" class="text-red-500">{{
          errors.cardNumber
        }}</span>
      </div>
      <div class="input-group mb-3">
        <label for="cpf" class="font-bold"
          >CPF do responsável pelo cartão</label
        >
        <input
          type="text"
          v-model="creditCard.cpf"
          @blur="validateInput('cpf')"
          required
        />
        <span v-if="errors.cpf" class="text-red-500">{{ errors.cpf }}</span>
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="input-group mb-3 px-2 w-40">
          <label for="expirationDate" class="font-bold">Validade</label>
          <input
            type="text"
            placeholder="MM/AA"
            v-model="creditCard.expirationDate"
            @blur="validateInput('expirationDate')"
            required
          />
          <span v-if="errors.expirationDate" class="text-red-500">{{
            errors.expirationDate
          }}</span>
        </div>
        <div class="input-group mb-3 px-2 w-24">
          <label for="cvv" class="font-bold">CVV</label>
          <input
            type="text"
            placeholder="XXX"
            v-model="creditCard.cvv"
            @blur="validateInput('cvv')"
            required
          />
          <span v-if="errors.cvv" class="text-red-500">{{ errors.cvv }}</span>
        </div>
      </div>
      <div
        class="bg-button rounded-xl px-4 py-2 flex items-center justify-center cursor-pointer w-full mx-auto mt-4"
      >
        <button
          type="submit"
          class="return-button bg-button text-white font-bold"
        >
          Realizar pagamento
        </button>
      </div>
    </form>
    <div
      v-if="paymentSuccess"
      class="text-lg font-bold text-green-700 text-center"
    >
      <h1>Pagamento aprovado</h1>
    </div>
    <div
      class="text-center justify-center mt-5 cursor-pointer text-center w-1/4 mx-auto text-white bg-button rounded-xl px-4 py-2 mt-3"
    >
      <button @click="returnToPayment" class="return-button">Voltar</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { inputRules } from "@/utils/input-rules"; 

const emits = defineEmits(["return-to-payment-method-selection", "payment-successful"]);
const paymentSuccess = ref(false);
const creditCard = reactive({
  fullName: "",
  cardNumber: "",
  cpf: "",
  expirationDate: "",
  cvv: "",
});
const errors = reactive({
  fullName: null,
  cardNumber: null,
  cpf: null,
  expirationDate: null,
  cvv: null,
});

const validateInput = (field) => {
  const rule = inputRules[field];
  const value = creditCard[field];
  if (!rule.validate(value)) {
    errors[field] = rule.message;
    return false;
  } else {
    errors[field] = null;
    return true;
  }
};

const submitCreditCardForm = () => {
  const isValid = Object.keys(creditCard).every((field) =>
    validateInput(field)
  );
  if (!isValid) {
    return;
  }
  console.log("Submitting credit card form:", creditCard);
  paymentSuccess.value = true;
  emits("payment-successful");
};

const returnToPayment = () => {
  emits("return-to-payment-method-selection");
};
</script>

<style scoped>
.credit-card-payment-container {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 500px;
  margin: auto;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #000000;
  border-radius: 4px;
  transition: border 0.3s ease;
}

.input-group input:hover {
  border: 1px solid #202122;
}

.input-group span {
  display: block;
  margin-top: 0.25rem;
}

.submit-button {
  width: 100%;
  background-color: #f44336;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
