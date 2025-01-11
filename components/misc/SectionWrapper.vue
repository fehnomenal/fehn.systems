<script setup lang="ts">
const { isSmallHeight = false } = defineProps<{
  isSmallHeight?: boolean
}>()
</script>

<template>
  <div class="flex flex-col content-center" :class="[isSmallHeight ? 'min-h-[5dvh]' : 'min-h-[90dvh]']">
    <slot />
  </div>
</template>
