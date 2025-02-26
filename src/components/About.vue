<script setup lang="ts">
import Card from "./Card.vue";
import { LAST_COMMIT_DATE } from '../last-commit.ts';

</script>

<template>
  <Card class="w-full md:w-2/3">
    <h2>About me</h2>
    <p>Currently in the third year of Computer Engineering in Polytechnic Institute of Viana do Castelo, Portugal.</p>
    <p>Im a young guy that <span class="text-xs font-light text-gray-300">(mostly)</span> loves what i do. I try often to go out of my conform zone and try other technical areas, not just software development</p>

    <template v-slot:tailing>
      <a href="https://github.com/cunhapedro25/about-me">
        Last updated: {{ LAST_COMMIT_DATE }}
      </a>
    </template>
  </Card>
</template>