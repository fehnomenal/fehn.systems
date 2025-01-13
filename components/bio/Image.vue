<script setup lang="ts">
import { _lg, _md, _sm } from '#tailwind-config/theme/screens'
</script>

<template>
  <div class="w-3/4 aspect-square mx-auto flex flex-col content-center justify-center">
    <MiscResponsiveImage
      src="/me.png" legacy-format="jpg" alt="Profile picture of Andreas Fehn" :sizes="{
        '': 535,
        [`(width < 320px)`]: 270,
        [`(width < ${_md})`]: 465,
        [`(width < ${_lg})`]: 245,
      }" class="relative" img-class="rounded-full aspect-square"
    />
  </div>
</template>
