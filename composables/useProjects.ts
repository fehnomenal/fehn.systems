import type { Component } from 'vue'
import type { BadgeType } from '~/components/misc/Badge.vue'
import DriveMotive from '~/components/project/DriveMotive.vue'
import EasyData from '~/components/project/EasyData.vue'
import Zlig from '~/components/project/Zlig.vue'

export type ProjectName = 'EASYDATA' | 'zlig' | 'DRIVEMOTIVE'

export interface Project {
  title: ProjectName
  badges: BadgeType[]
  imageUrl: string
  dateFormatted: string
  datetime: string
  component: Component
}

export function useProjects() {
  const projects: Project[] = [
    {
      title: 'EASYDATA',
      badges: ['ts', 'SvelteKit'],
      imageUrl: '/projects/easydata-1.png',
      dateFormatted: 'Sep 1, 2024',
      datetime: '2024-09-01',
      component: markRaw(EasyData),
    },
    {
      title: 'zlig',
      badges: ['ts', 'vue', 'three.js'],
      imageUrl: '/projects/zlig-1.png',
      dateFormatted: 'ongoing',
      datetime: '2020-03-16',
      component: markRaw(Zlig),
    },
    {
      title: 'DRIVEMOTIVE',
      badges: ['SvelteKit', 'ts', 'Docker', 'PostgreSQL', 'React', 'Directus'],
      imageUrl: '/projects/drivemotive-1.png',
      dateFormatted: 'Dec 31, 2024',
      datetime: '2024-12-31',
      component: markRaw(DriveMotive),
    },
  ]

  return {
    projects,
  }
}
