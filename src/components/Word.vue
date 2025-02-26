<script setup lang="ts">
defineProps({
  word: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span class="word">
    <span class="letter" v-for="(char, i) in Array.from(word)"
          :style="`--i: ${i}; --speed: 1.5`">
        {{ char }}
    </span>
  </span>
</template>

<style scoped>
.word {
  @apply flex flex-wrap w-fit;
  --i: 0;
  --speed: 0;

  .letter {
    text-shadow: #00000066 0.05rem 0.20rem;
    animation: letter-up ease-in-out infinite alternate;
    animation-delay: calc(var(--i) * clamp(-0.5s, calc(var(--speed) * 1.5s), -1.5s));
    animation-duration: clamp(0.3s, calc(var(--speed) * 1s), 1s);
  }
}

@keyframes letter-up {
  0%{
    text-shadow: #00000066 0.05rem 0.20rem;
    transform: translateY(0rem) rotate(-1deg);
  }
  100%{
    text-shadow: #00000066 0.05rem 0.25rem;
    transform: translateY(-0.10rem) rotate(1deg);
  }
}
</style>