<template>
  <div>
    <h3 v-if="!paymentSuccess" class="text-lg font-bold mb-5">
      Preencha os dados de pagamento
    </h3>
    <form v-if="!paymentSuccess" @submit.prevent="submitCreditCardForm">
      <div class="input-group mb-3">
        <label for="fullName" class="font-bold">Nome completo</label>
        <input type="text" v-model="creditCard.fullName" required />
      </div>
      <div class="input-group mb-3">
        <label for="cardNumber" class="font-bold">Número do cartão</label>
        <input type="text" v-model="creditCard.cardNumber" required />
      </div>
      <div class="input-group mb-3">
        <label for="cpf" class="font-bold"
          >CPF do responsável pelo cartão</label
        >
        <input type="text" v-model="creditCard.cpf" required />
      </div>
      <div class="flex flex-wrap -mx-2">
        <div class="input-group mb-3 px-2 w-40">
          <label for="expirationDate" class="font-bold">Validade</label>
          <input
            type="text"
            placeholder="MM/AA"
            v-model="creditCard.expirationDate"
            required
          />
        </div>
        <div class="input-group mb-3 px-2 w-24">
          <label for="cvv" class="font-bold">CVV</label>
          <input type="text" placeholder="XXX" required />
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
      class="text-center justify-center mt-5 text-center w-1/4 mx-auto text-white bg-button rounded-xl px-4 py-2 mt-3"
    >
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
