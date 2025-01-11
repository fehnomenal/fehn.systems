<script setup lang="ts">
export type BadgeType = 'ts' | 'vue' | 'svelte'

defineProps<{
  type: BadgeType
}>()

type typeToContentType = {
  [key in BadgeType]: {
    text: string
  }
}

const typeToContent: typeToContentType = {
  ts: {
    text: 'TypeScript',
  },
  vue: {
    text: 'Vue',
  },
  svelte: {
    text: 'Svelte',
  },
}
</script>

<template>
  <span
    class="inline-block px-2 py-0.5 rounded-full text-xs/4 font-semibold text-gray-900 bg-gray-300"
  >
    {{ typeToContent[type]?.text ?? type }}
  </span>
</template>

<style scoped></style>
