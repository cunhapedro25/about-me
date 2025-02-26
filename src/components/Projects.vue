<script setup lang="ts">
import Card from "./Card.vue";

let projects = [
  {
    "link": "https://github.com/cunhapedro25/firecringe",
    "name": "Firecringe",
    "description": "Firecringe is a very col costum chorme thing for firefoxs to look prrety"
  },
  {
    "link": "https://github.com/cunhapedro25/goose-game",
    "name": "Goose-game",
    "description": "Simple \"the goose game\" created for the curricular unit PROG 1 at IPVC"
  }
]
</script>

<template>
  <Card class="w-full md:w-2/3">
    <h1>Projects</h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
      <a v-for="project in projects" :href="project.link" class="flex flex-col hover:bg-white/20 p-6 rounded-xl bg-white/10">
        <p class="text-xl">> {{ project.name }}</p>
        <p class="text-xs break-words font-light text-gray-300">{{ project.description }}</p>
      </a>
    </div>
  </Card>
</template>

<style scoped>

</style>