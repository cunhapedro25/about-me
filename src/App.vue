<script setup lang="ts">
import Photo from "./components/Photo.vue";
import About from "./components/About.vue";
import Contacts from "./components/Contacts.vue";
import Projects from "./components/Projects.vue";

</script>

<template>
  <div class="h-screen w-screen text-white flex flex-col gap-2 md:justify-center md:items-center p-6">

    <div class="w-full md:w-2/3 flex flex-col md:flex-row gap-2">
      <div class="w-full md:w-2/3 flex flex-col gap-2">
        <Photo/>
        <Contacts/>
      </div>

      <About />
    </div>

    <Projects class="mb-16"/>
  </div>
</template>

