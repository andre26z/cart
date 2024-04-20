<template>
  <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    <!-- Total... -->
    <div class="p-4 bg-white rounded-lg shadow-md mt-4">
      <h3 class="font-semibold text-gray-800">Total:</h3>
      <p class="text-xl font-bold text-gray-900">R${{ total }}</p>
    </div>
    <!-- Purchase details... -->
    <div v-for="product in products" :key="product.id">
      <ProductCard
        :item="product.item"
        :description="product.description"
        :value="product.value"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import productData from "@/produtos.json";
const products = ref(productData);

const total = computed(() => {
  return products.value.reduce((acc, product) => acc + product.value, 0);
});
</script>
