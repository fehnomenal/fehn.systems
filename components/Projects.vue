<script setup lang="ts">
import type { Component } from 'vue'
import { ModalsContainer, useModal } from 'vue-final-modal'
import ProjectModal from '~/components/ProjectModal.vue'

const { projects } = useProjects()

function openModal(component: Component) {
  const { open } = useModal({
    attrs: {
      projectComponent: component,
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
        v-for="project in projects" :key="project.title" class="relative isolate flex flex-col justify-end overflow-hidden
                 rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80
                 transition ease-in-out delay-50 md:hover:-translate-y-1 md:hover:scale-110 duration-200"
      >
        <div class="absolute inset-0 -z-10">
          <MiscResponsiveImage
            :src="project.imageUrl" legacy-format="jpg" :alt="`Project hero ${project.title}`"
            img-class="size-full object-cover" :sizes="{
              '': 515,
              [`(width < 400px)`]: 375,
              [`(width < 768px)`]: 620,
              [`(width < 1024px)`]: 740,
              [`(width < 1280px)`]: 325,
              [`(width < 1536px)`]: 420,
            }"
          />
        </div>

        <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-gray-300">
          <time :datetime="project.datetime" class="mr-8">{{ project.dateFormatted }}</time>
        </div>

        <div class="flex flex-row flex-wrap gap-2 mt-1">
          <MiscBadge v-for="badge in project.badges" :key="badge" :type="badge" />
        </div>

        <h3 class="mt-3 text-lg/6 font-semibold text-white">
          <NuxtLink class="hover:cursor-pointer" @click="() => openModal(project.component)">
            <span class="absolute inset-0" />
            {{ project.title }}
          </NuxtLink>
        </h3>
      </article>
    </div>

    <ModalsContainer />
  </div>
</template>
