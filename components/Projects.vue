<script setup lang="ts">
import type { DefineComponent } from 'vue'
import { ModalsContainer, useModal } from 'vue-final-modal'
import ProjectModal from '~/components/ProjectModal.vue'

const { projects } = useProjects()

function openModal(component: DefineComponent) {
  const { open } = useModal({
    attrs: {
      project: component,
    },
    component: ProjectModal,
  })
  open()
}
</script>

<template>
  <div id="projects" class="myContainer py-24 sm:py-32">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
        Projects
      </h2>
      <p class="mt-2 text-lg/8 text-gray-600">
        Learn what I have been working on lately.
      </p>
    </div>

    <div
      class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <article
        v-for="project in projects"
        :key="project.title"
        class="relative isolate flex flex-col justify-end overflow-hidden
                 rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80
                 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-200"
      >
        <img :src="project.imageUrl" alt="" class="absolute inset-0 -z-10 size-full object-cover">
        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
          <time :datetime="project.datetime" class="mr-8">{{ project.dateFormatted }}</time>
        </div>

        <div class="flex flex-row gap-2 mt-1">
          <MiscBadge
            v-for="badge in project.badges"
            :key="badge"
            :type="badge"
          />
        </div>

        <h3 class="mt-3 text-lg/6 font-semibold text-white">
          <NuxtLink class="hover:cursor-pointer" @click="() => openModal(project.component())">
            <span class="absolute inset-0" />
            {{ project.title }}
          </NuxtLink>
        </h3>
      </article>
    </div>

    <ModalsContainer />
  </div>
</template>
