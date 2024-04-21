<template>
  <div class="container mx-auto h-screen items-center w-2/3">
    <div class="products-section">
      <div class="p-4 bg-white rounded-lg shadow-md">
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
        <div class="product-list">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :item="product.item"
            :description="product.description"
            :value="product.value"
            :disabled="paymentMethodSelected !== null"
            @update-total="handleUpdateTotal"
          />
        </div>
      </div>
    </div>

    <div class="grid-wrapper ml-7 mr-7">
      <div class="grid grid-cols-1 divide-y vertical-divider px-4">
        <div class="bg-button rounded-full text-white px-2 py-0.5 ml-1">1</div>
        <div
          :class="{
            'rounded-full px-2 py-0.5 ml-1 mt-3  text-white': true,
            'bg-button':
              paymentMethodSelected === 'PIX' ||
              paymentMethodSelected === 'Cartao de Credito' ||
              paymentMethodSelected === 'Boleto',
            'bg-gray-400': !(
              paymentMethodSelected === 'PIX' ||
              paymentMethodSelected === 'Cartao de Credito' ||
              paymentMethodSelected === 'Boleto'
            ),
          }"
        >
          2
        </div>
        <div
          :class="['rounded-full px-2 py-0.5 ml-1 mt-3 text-white', buttonStyle]"
        >
          3
        </div>
      </div>
    </div>
    <div class="payment-section ">
      <div class="max-w-xl mx-auto bg-white overflow-hidden ml-2">
        <Payment
          v-if="!paymentMethodSelected"
          @proceed-with-method="handleProceedWithMethod"
        />
        <Pix
          v-else-if="paymentMethodSelected === 'PIX'"
          @return-to-marketplace="handleReturnToMarketplace"
        />
        <CreditCardPayment
          v-if="paymentMethodSelected === 'Cartao de Credito'"
          @payment-successful="handlePaymentSuccess"
          @return-to-payment-method-selection="
            handleReturnToPaymentMethodSelection
          "
        />

        <Boleto
          v-else-if="paymentMethodSelected === 'Boleto'"
          @return-to-payment="handleReturnToPaymentMethodSelection"
          @payment-successful="handlePaymentSuccess"
        />
      </div>
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

const paymentMethodSelected = ref(null);

const handleUpdateTotal = ({ value, selected }) => {
  if (selected) {
    total.value += value;
  } else {
    total.value -= value;
  }
};

const handleProceedWithMethod = (method) => {
  if (total.value > 0) {
    paymentMethodSelected.value = method;
  } else {
    alert("Seu carrinho está vazio!");
  }
};

const handleReturnToMarketplace = () => {
  paymentMethodSelected.value = null;
};

const buttonStyle = ref("bg-gray-400"); 

const handlePaymentSuccess = () => {
  buttonStyle.value = "bg-button"; 
};

const handleReturnToPaymentMethodSelection = () => {
  paymentMethodSelected.value = null;
  buttonStyle.value = "bg-gray-400";
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.products-section,
.payment-section {
  flex: 1;
  margin: 10px;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.product-list {
  flex-basis: 100%;
  max-height: 175px;
  overflow-y: auto;
}

.grid-wrapper .vertical-divider {
  border-right: 2px solid #ccc;
}
</style>
