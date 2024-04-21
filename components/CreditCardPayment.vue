<template>
  <div class="credit-card-payment-container">
    <h3 class="text-lg font-bold mb-2">Preencha os dados de pagamento</h3>
    <form v-if="!paymentSuccess" @submit.prevent="submitCreditCardForm">
      <div class="input-group mb-3">
        <input
          type="text"
          placeholder="Nome completo"
          v-model="creditCard.fullName"
          required
        />
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          placeholder="Números do cartão"
          v-model="creditCard.cardNumber"
          required
        />
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          placeholder="CPF do responsável pelo cartão"
          v-model="creditCard.cpf"
          required
        />
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          placeholder="Validade"
          v-model="creditCard.expirationDate"
          required
        />
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          placeholder="CVV"
          v-model="creditCard.cvv"
          required
        />
      </div>
      <button type="submit" class="submit-button">Realizar pagamento</button>
    </form>
    <div v-if="paymentSuccess" class="payment-success-message">
      <p>Pagamento aprovado</p>
    </div>
    <div class="text-center justify-center mt-2">
      <button @click="returnToPayment" class="return-button">Voltar</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const emits = defineEmits(["return-to-payment-method-selection"]);
const paymentSuccess = ref(false);
const creditCard = reactive({
  fullName: "",
  cardNumber: "",
  cpf: "",
  expirationDate: "",
  cvv: "",
});

const submitCreditCardForm = () => {
  // Placeholder for form submission logic
  console.log("Submitting credit card form:", creditCard);

  // Here you should implement the actual form submission to your backend
  // After successful submission, set paymentSuccess to true to show the confirmation message
  paymentSuccess.value = true;
};
const returnToPayment = () => {
  emits("return-to-payment-method-selection");
};
</script>

<style scoped>
/* You can place your CSS here. This is just an example */
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
  border: 1px solid #ddd;
  border-radius: 4px;
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
