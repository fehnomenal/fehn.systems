<script setup lang="ts">
const { isSmallHeight = false } = defineProps<{
  isSmallHeight?: boolean
}>()
</script>

<template>
  <div class="snap-center snap-always" :class="[isSmallHeight ? 'h-[5dvh]' : 'h-[90dvh]']">
    <slot />
  </div>
</template>
