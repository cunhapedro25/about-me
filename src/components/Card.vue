<template>
  <div class="flex flex-col gap-2 p-6 rounded-xl bg-white/10 fade-in relative">
    <slot />

    <div class="absolute bottom-2 right-2 text-xs font-light text-gray-300">
      <slot name="tailing" ></slot>
    </div>
  </div>
</template>