<script setup lang="ts">
import Word from "./Word.vue";

defineProps({
  phrase: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span class="phrase">
    <Word v-for="word in phrase.split(' ')" :word />
  </span>
</template>

<style scoped>
.phrase{
  @apply flex gap-1 flex-wrap w-fit;
}
</style>