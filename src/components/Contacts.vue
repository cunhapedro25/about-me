<script setup lang="ts">
import Card from "./Card.vue";

let contacts = [
  {
    "icon": "email",
    "name": "pedro10cunha@gmail.com",
    "link": "mailto:pedro10cunha@gmail.com"
  },
  {
    "icon": "instagram",
    "name": "@cunha.pedro25",
    "link": "https://www.instagram.com/cunha.pedro25/"
  },
  {
    "icon": "linkedin",
    "name": "cunhapedro25",
    "link": "www.linkedin.com/in/cunhapedro25"
  }
]
</script>

<template>
  <Card class="w-full">
    <h2>Contacts</h2>
    <a href="" v-for="contact in contacts" class="flex gap-2 items-center">
      <p>{{ contact.icon }}</p>
      <p>{{ contact.name }}</p>
    </a>
  </Card>
</template>

<style scoped>

</style>