<template>
  <div class="payment-methods">
    <h1 class="text-center font-bold mb-4">Escolha o método de pagamento</h1>
    <div class="flex flex-col gap-2 mb-4">
      <button
        class="payment-button mt-3"
        :class="{ selected: selectedMethod === 'PIX' }"
        @click="selectMethod('PIX')"
      >
        PIX
      </button>
      <button
        class="payment-button mt-3"
        :class="{ selected: selectedMethod === 'Cartao de Credito' }"
        @click="selectMethod('Cartao de Credito')"
      >
        Cartão de crédito
      </button>
      <button
        class="payment-button mt-3"
        :class="{ selected: selectedMethod === 'Boleto' }"
        @click="selectMethod('Boleto')"
      >
        Boleto
      </button>
    </div>
  </div>
  <div
    @click="emitProceed"
    class="bg-button rounded-xl px-4 py-2 flex items-center justify-center cursor-pointer w-2/3 mx-auto mt-4"
  >
    <button class="return-button bg-button text-white font-bold">
      Prosseguir
    </button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const selectedMethod = ref(null);
const emits = defineEmits(["proceed-with-method"]);

const selectMethod = (method) => {
  selectedMethod.value = method;
};

const emitProceed = () => {
  if (selectedMethod.value) {
    emits("proceed-with-method", selectedMethod.value);
  } else {
    console.error("Please select a payment method before proceeding.");
  }
};
</script>

<style scoped>
.payment-button {
  padding: 10px 10px 10px 20px;
  border: 2px solid #ed7a7a;
  border-radius: 8px;
  background-color: white;
  color: #ed7a7a;
  text-align: left;
  transition: background-color 0.3s, color 0.3s;
  font-weight: bold;
  font-size: large;
}

.payment-button.selected {
  background-color: #ed7a7a; /* Background color when selected */
  color: white; /* Text color when selected */
}

.proceed-button {
  padding: 1rem;
  background-color: #db2777;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
}
</style>
