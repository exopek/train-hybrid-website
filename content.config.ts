import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
    }),
    blogLinked: defineCollection({
      type: 'page',
      source: 'blog-linked/**',
    }),
  },
})
