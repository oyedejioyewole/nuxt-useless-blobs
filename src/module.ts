import { addComponent, addImportsSources, createResolver, defineNuxtModule } from '@nuxt/kit'
import { kebabCase } from 'change-case'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * This key allows you to set the prefix for the component registered by the module.
   *
   * @default "useless-blobs"
   */
  prefix: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-useless-blobs',
    configKey: 'uselessBlobs',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: { prefix: 'useless-blobs' },
  setup: (options, nuxt) => {
    const { resolve } = createResolver(import.meta.url)

    addComponent({
      filePath: resolve('./runtime/components/UselessBlob.vue'),
      name: kebabCase(options.prefix),
    })

    addImportsSources({
      from: resolve('./runtime/composables/blob.ts'),
      imports: ['useCreatePolygon', 'useGenerateBlobPath', 'useGeneratePathString'],
    })

    // Remove this line if you enjoy module resolution problems.
    nuxt.options.build.transpile.push('useless-blobs')
  },
})
