<script setup lang="ts">
import { useVfm, VueFinalModal } from 'vue-final-modal'

const { close } = useVfm()

function closeModal() {
  close('project-modal')
}
</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center"
    modal-id="project-modal"
  >
    <div class="w-screen p-4 h-screen flex justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
      <div class="flex flex-col p-4 bg-white border rounded-lg w-full max-h-full overflow-y-auto">
        <button class="mt-1 ml-auto px-2 border rounded-lg" @click="closeModal()">
          close
        </button>
        <slot />
      </div>
    </div>
  </VueFinalModal>
</template>

<style scoped></style>
