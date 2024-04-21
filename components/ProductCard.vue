<template>
  <div
    class="flex justify-between p-4 rounded-lg shadow-md mb-2 border-l-4 cursor-pointer "
    :class="{
      'bg-white border-red-500': !isSelected,
      'bg-gray-300 border-gray-500': isSelected,
    }"
    @click="toggleSelection"
  >
    <div>
      <h3 class="font-semibold text-gray-800">{{ item }}</h3>
      <p class="text-gray-600">{{ description }}</p>
    </div>
    <div class="text-gray-800 font-semibold">R${{ value.toFixed(2) }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  item: String,
  description: String,
  value: Number,
});

const emit = defineEmits(["update-total"]);

const isSelected = ref(false);

const toggleSelection = () => {
  isSelected.value = !isSelected.value;

  emit("update-total", { value: props.value, selected: isSelected.value });
};
</script>
