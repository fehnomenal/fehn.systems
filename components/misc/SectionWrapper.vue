<script setup lang="ts">
const { isSmallHeight = false } = defineProps<{
  isSmallHeight?: boolean
}>()
</script>

<template>
  <div class="container mx-auto px-3 md:px-10" :class="[isSmallHeight ? 'min-h-[5dvh]' : 'min-h-[90dvh]']">
    <slot />
  </div>
</template>
