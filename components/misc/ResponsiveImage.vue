<script setup lang="ts">
const props = defineProps<{
  src: string
  sizes: { [S in '' | string]: number }
  legacyFormat: string
  alt: string
  imgClass?: string
}>()

const $img = useImage()

const FORMATS = ['avif', 'webp']

const placeholderUrl = computed(() => $img(props.src, { format: props.legacyFormat, width: 10, height: 10, quality: 50, blur: 3 }))

const sources = computed(() => FORMATS.map(format => ({
  type: `image/${format}`,
  ...generateSource(props.src, props.sizes, format),
})))

const legacySource = computed(() => ({
  type: props.legacyFormat,
  ...generateSource(props.src, props.sizes, props.legacyFormat),
}))

function generateSource(src: string, sizes: typeof props.sizes, format: string) {
  const { '': baseWidth, ...rest } = sizes

  const finalSizes = Object.entries(rest).map(([condition, width]) => `${condition} ${width}px`)
  finalSizes.push(`${baseWidth}px`)

  const finalSrcset = Object.values(rest).map(width => `${$img(src, { format, width })} ${width}w`)
  const baseSrc = $img(src, { format, width: baseWidth })
  finalSrcset.push(`${baseSrc} ${baseWidth}w`)

  return {
    sizes: finalSizes,
    srcset: finalSrcset,
    src: baseSrc,
  }
}
</script>

<template>
  <div>
    <img
      :src="placeholderUrl" :alt :class="props.imgClass"
      class="absolute top-0 w-full flex flex-col items-center justify-center"
    >

    <picture class="relative">
      <source
        v-for="source in sources" :key="source.type" :type="source.type" :sizes="source.sizes.join(',')"
        :srcset="source.srcset.join(',')"
      >

      <img
        :src="legacySource.src" :sizes="legacySource.sizes.join(',')" :srcset="legacySource.srcset.join(',')"
        :class="props.imgClass"
      >
    </picture>
  </div>
</template>
