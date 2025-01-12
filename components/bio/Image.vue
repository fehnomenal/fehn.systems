<template>
  <div class="w-3/4 aspect-square mx-auto flex flex-col content-center justify-center">
    <MiscResponsiveImage
      src="/me.png" legacy-format="jpg" alt="Profile picture of Andreas Fehn" :sizes="{
        '': 535,
        [`(width < 320px)`]: 270,
        [`(width < 768px)`]: 465,
        [`(width < 1024px)`]: 245,
      }" class="relative" img-class="rounded-full aspect-square"
    />
  </div>
</template>
