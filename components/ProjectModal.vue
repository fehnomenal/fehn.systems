<script setup lang="ts">
import type { DefineComponent } from 'vue'
import { useVfm, VueFinalModal } from 'vue-final-modal'

defineProps<{
  project: DefineComponent
}>()

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
    <div class="w-screen p-4 h-screen flex justify-center items-center mx-auto max-w-7xl px-6 lg:px-8" @click="closeModal()">
      <div class="flex flex-col p-4 bg-white border rounded-lg w-full max-h-full overflow-y-auto" @click.stop="() => {}">
        <button class="mt-1 ml-auto px-2 border rounded-lg" @click="closeModal()">
          close
        </button>
        <component :is="project" />
      </div>
    </div>
  </VueFinalModal>
</template>

<style scoped></style>
