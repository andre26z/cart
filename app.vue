<template>
  <div class="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    <div class="p-4 bg-white rounded-lg shadow-md mt-4">
      <h3 class="font-semibold text-gray-800">Produtos:</h3>
      <p class="text-xl font-bold text-gray-900">R${{ total.toFixed(2) }}</p>
    </div>
    <div v-if="total > 0" class="p-4 bg-white rounded-lg shadow-md">
      <h3 class="font-semibold text-gray-800">Total com frete:</h3>
      <p class="text-xl font-bold text-gray-900">
        R${{ (total + 100).toFixed(2) }}
      </p>
    </div>
    <div class="flex-container">
      <div class="product-list flex-1">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :item="product.item"
          :description="product.description"
          :value="product.value"
          @update-total="handleUpdateTotal"
        />
      </div>
    </div>
    <div class="max-w-xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <Payment
        v-if="!paymentMethodSelected"
        @proceed-with-method="handleProceedWithMethod"
      />
      <Pix
        v-else-if="paymentMethodSelected === 'PIX'"
        @close-pix="handleClosePix"
        @return-to-marketplace="handleReturnToMarketplace"
      />
      <CreditCardPayment
        v-if="paymentMethodSelected === 'Cartao de Credito'"
        @return-to-payment-method-selection="
          handleReturnToPaymentMethodSelection
        "
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import productData from "@/products.json";
import Pix from "@/components/Pix.vue";
const products = ref(productData);
const total = ref(0);
const showPix = ref(false);
const paymentMethodSelected = ref(null);

const handleUpdateTotal = ({ value, selected }) => {
  if (selected) {
    total.value += value;
  } else {
    total.value -= value;
  }
};
const handlePaymentSelected = (method) => {
  if (method === "PIX") {
    showPix.value = true;
  }
};
const handleProceedWithMethod = (method) => {
  paymentMethodSelected.value = method;
};

const handleReturnToMarketplace = () => {
  paymentMethodSelected.value = null;
};
const handleReturnToPaymentMethodSelection = () => {
  paymentMethodSelected.value = null;
};
</script>

<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between;
}

.product-list,
.payment-method {
  flex-basis: 50%;
}

/* Add any additional styling as needed */
</style>
