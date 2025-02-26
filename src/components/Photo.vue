<script setup lang="ts">
import Phrase from "./Phrase.vue";
import Card from "./Card.vue";
</script>

<template>
  <Card class="w-full">
    <div class="flex gap-6">
      <img src="/me.jpg" alt="my face" class="rounded-full w-32 h-32 hover:animate-spin" draggable="false"/>

      <div class="flex flex-col -rotate-12">
        <img src="/arrow.svg" alt="arrow" class="pointer" draggable="false"/>
        <p>Hey its me!</p>
      </div>
    </div>

    <div class="flex gap-1 items-center flex-nowrap text-lg relative text-nowrap">
      <p>My name is</p>
      <Phrase phrase="Pedro Cunha" class="font-bold"/>
      <span class="absolute top-6 left-24 text-xs font-light text-gray-300">(WHAT NO WAY!!!)</span>
    </div>
  </Card>
</template>

<style scoped>
.pointer {
  @apply w-12;
  animation: point-me 1s infinite alternate ease-in-out;
}

@keyframes point-me {
  0%{
    transform: translateX(-1rem) rotate(0);
  }
  100%{
    transform: translateX(0rem) rotate(12deg);
  }
}
</style>