<template>
  <div
    class="pix-container text-center p-4 bg-white rounded-lg shadow-md max-w-sm mx-auto overflow-y-auto"
  >
    <h3 class="text-lg font-bold mb-2">Obrigado por comprar com a gente!</h3>
    <p>Olá, João Vitor. Obrigado por comprar!</p>
    <p>O QR CODE abaixo te dá 5% de desconto no site!</p>

    <figure>
      <img
        src="@/assets/qr-code.png"
        alt="QR Code"
        class="qr-code mb-4 w-40 justify-center mx-auto mt-3"
      />
    </figure>
    <div class="timer mb-2 text-lg text-green-600 mb-2">
      Faltam {{ minutes }}:{{ seconds < 10 ? "0" + seconds : seconds }} para
      expirar!
    </div>
    <div
      class="bg-button rounded-xl px-4 py-2 mt-3 cursor-pointer"
      @click="returnToMarketplace"
    >
      <button class="return-button bg-button text-white font-bold">
        Voltar ao marketplace
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const emits = defineEmits(["close-pix"]);
const timer = ref(600);
const minutes = ref("10");
const seconds = ref("00");
const closePix = () => {
  emits("close-pix");
};
const countdown = () => {
  if (timer.value > 0) {
    timer.value--;
    minutes.value = Math.floor(timer.value / 60).toString();
    seconds.value = (timer.value % 60).toString();
  }
};

let intervalId;
onMounted(() => {
  intervalId = setInterval(() => {
    if (timer.value === 0) {
      closePix();
    }
    countdown();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const returnToMarketplace = () => {
  emits("return-to-marketplace");
};
</script>
