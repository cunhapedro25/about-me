<script setup lang="ts">
import Phrase from "./components/Phrase.vue";

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

let contacts = [
  {
    "icon": "email",
    "contact": "pedro10cunha@gmail.com",
  },
  {
    "icon": "instagram",
    "contact": "@cunha.pedro25",
  },
  {
    "icon": "linkedin",
    "contact": "@cunha.pedro25",
  }
]
</script>

<template>
  <div class="h-screen w-screen text-white flex flex-col gap-2 justify-center items-center">

    <div class="w-1/2 flex gap-2">
      <div class="w-1/2 flex flex-col gap-2 p-6 rounded-xl bg-white/10 fade-in">
        <div class="flex gap-6">
          <img src="/me.jpg" alt="my face" class="rounded-full w-32 aspect-square hover:animate-spin" draggable="false"/>

          <div class="flex flex-col -rotate-12">
            <img src="/arrow.svg" alt="arrow" class="pointer" draggable="false"/>
            <p>Hey its me!</p>
          </div>
        </div>

        <div class="flex gap-1 items-center text-xl">
          My name is <Phrase phrase="Pedro Cunha" class="font-bold"/> <span class="text-xs font-light text-gray-300">(WHAT NO WAY!!!)</span>
        </div>

        <hr>

        <div class="flex flex-col gap-2">
          <h2>Contacts</h2>
          <div>

          </div>
        </div>
      </div>

      <div class="w-1/2 flex flex-col gap-2 p-6 rounded-xl bg-white/10 fade-in">
        <div class="flex flex-col gap-2">
          <h2>About me</h2>
          <p>Currently in the third year of Computer Engineering in Polytechnic Institute of Viana do Castelo, Portugal.</p>
          <p>Im a young guy that <span class="text-xs font-light text-gray-300">(mostly)</span> loves what i do. I try often to go out of my conform zone and try other technical areas, not just software development</p>
        </div>
      </div>
    </div>

    <div class="w-1/2 flex flex-col gap-2 p-6 rounded-xl bg-white/10 fade-in">
      <h1>Projects</h1>

      <div class="grid grid-cols-3 gap-2">
        <a v-for="project in projects" :href="project.link" class="flex flex-col hover:bg-white/20 p-6 rounded-xl bg-white/10">
          <p class="text-xl">> {{ project.name }}</p>
          <p class="text-xs break-words font-light text-gray-300">{{ project.description }}</p>
        </a>
      </div>
    </div>
  </div>
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
