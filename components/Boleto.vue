<template>
  <div class="boleto-container p-4 bg-white rounded-lg shadow-md">
    <div v-if="paymentConfirmed">
      <h1
        v-if="paymentConfirmed"
        class="text-2xl font-bold text-center text-green-600"
      >
        Obrigado por comprar conosco!
      </h1>
      <div class="text-center">
        <button
          class="voltar-btn bg-button hover:bg-button-700 text-white font-bold py-2 px-4 rounded-xl mt-5"
          @click="$emit('return-to-payment')"
        >
          Voltar
        </button>
      </div>
    </div>
    <div v-else>
      <h2 class="boleto-title text-lg font-bold mb-2">Pagamento por boleto</h2>
      <p class="mb-4">
        Copie e cole o código no seu banco ou leve até uma lotérica da Caixa
        para realizar o pagamento!
      </p>
      <div
        class="boleto-code bg-gray-100 p-3 font-bold rounded text-lg font-mono mb-4 text-center mt-3"
      >
        8949461894984 6515648916 6548964631668
      </div>
      <div class="p-3 rounded text-lg text-center font-mono">
        <button
          class="copy-btn text-blue-800 font-bold py-2 px-4 rounded mb-4 text-center"
          @click="copyCode"
        >
          Clique aqui para copiar o código
        </button>
      </div>
      <div class="text-center bg-button rounded-xl px-4 py-2 mt-3">
        <button class="text-white font-bold" @click="confirmPayment">
          Já fiz o pagamento
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const boletoCode = "8949461894984 6515648916 6548964631668";
const paymentConfirmed = ref(false);

const copyCode = () => {
  navigator.clipboard
    .writeText(boletoCode)
    .then(() => {
      // Possibly show a success message to the user
    })
    .catch((err) => {
      // Possibly show an error message to the user
      console.error("Failed to copy: ", err);
    });
};

const confirmPayment = () => {
  paymentConfirmed.value = true;
  // Here you can implement additional logic like notifying the backend, etc.
};
</script>

<style scoped>
/* Add any additional Tailwind styles as needed */
</style>
