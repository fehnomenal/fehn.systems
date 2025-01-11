import type { BadgeType } from '~/components/misc/Badge.vue'
import EasyData from '~/components/project/EasyData.vue'
import Zlig from '~/components/project/Zlig.vue'

export interface Project {
  title: string
  badges: BadgeType[]
  imageUrl: string
  dateFormatted: string
  datetime: string
  component?: () => any
}

export function useProjects() {
  const projects: Project[] = [
    {
      title: 'easy-data',
      badges: ['ts', 'svelte'],
      imageUrl: 'https://images.unsplash.com/photo-1735116356965-ad5b323d1af8?auto=format&fit=crop&w=720',
      dateFormatted: 'Mar 16, 2020',
      datetime: '2020-03-16',
      component: () => EasyData,
    },
    {
      title: 'zlig',
      badges: ['ts', 'vue'],
      imageUrl: 'https://images.unsplash.com/photo-1735116356965-ad5b323d1af8?auto=format&fit=crop&w=720',
      dateFormatted: 'Mar 16, 2020',
      datetime: '2020-03-16',
      component: () => Zlig,
    },
  ]

  return {
    projects,
  }
}
