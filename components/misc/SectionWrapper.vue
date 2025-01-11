<script setup lang="ts">
const { isSmallHeight = false } = defineProps<{
  isSmallHeight?: boolean
}>()
</script>

<template>
  <div :class="[isSmallHeight ? 'h-[5dvh]' : 'min-h-[90dvh]']">
    <slot />
  </div>
</template>
