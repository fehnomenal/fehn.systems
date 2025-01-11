<script setup lang="ts">
defineProps<{
  href: string
  label?: string
}>()
</script>

<template>
  <a
    :href target="_blank" rel="noopener noreferrer"
    class="border-2 border-primary-200 bg-white hover:border-primary-500 p-3 rounded-md flex gap-5 items-center"
  >
    <slot />

    <span class="flex-grow text-center">{{ label ?? href }}</span>
  </a>
</template>
