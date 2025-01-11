<script setup lang="ts">
defineProps<{
  to: string
  text: string
}>()
</script>

<template>
  <NuxtLink class="group relative text-lg md:text-xl font-semibold" :to>
    <span
      class="absolute z-10 bottom-0 right-0 left-0 bg-primary-300/80 h-1/2 w-0 group-hover:w-full transition-all"
    />

    <span class="z-20 relative p-1">{{ text }}</span>
  </NuxtLink>
</template>
