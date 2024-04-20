<!-- produtos.vue -->
<template>
    <div class="flex justify-between p-4 bg-white rounded-lg shadow-md mb-2 border-l-4 border-red-500">
      <div>
        <h3 class="font-semibold text-gray-800">{{ item }}</h3>
        <p class="text-gray-600">{{ description }}</p>
      </div>
      <div class="text-gray-800 font-semibold">
        R${{ value.toFixed(2) }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      item: String,
      description: String,
      value: Number,
    },
  };
  </script>
  