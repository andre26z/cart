<template>
  <div class="payment-methods">
    <h2 class="text-center font-bold mb-4">Escolha o método de pagamento</h2>
    <div class="flex flex-col gap-2 mb-4">
      <button
        class="payment-button"
        :class="{ selected: selectedMethod === 'PIX' }"
        @click="selectMethod('PIX')"
      >
        PIX
      </button>
      <button
        class="payment-button"
        :class="{ selected: selectedMethod === 'Cartao de Credito' }"
        @click="selectMethod('Cartao de Credito')"
      >
        Cartão de crédito
      </button>
      <button
        class="payment-button"
        :class="{ selected: selectedMethod === 'Boleto' }"
        @click="selectMethod('Boleto')"
      >
        Boleto
      </button>
    </div>
  </div>
  <div class="text-center">
    <button class="proceed-button" @click="emitProceed">Prosseguir</button>
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
    // Handle the case where no method is selected
    console.error("Please select a payment method before proceeding.");
  }
};
</script>

<style scoped>
.payment-button {
  padding: 1rem;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background-color: white;
  text-align: center;
}

.payment-button.selected {
  border-color: #db2777;
  color: white;
  background-color: #db2777;
}

.proceed-button {
  padding: 1rem;
  background-color: #db2777;
  color: white;
  border: none;
  border-radius: 8px;
  margin-top: 1rem;
}

/* Additional styling to match your screenshot may be needed */
</style>
