import { addComponent, addImportsSources, createResolver, defineNuxtModule } from '@nuxt/kit'
import { kebabCase } from 'change-case'

// Module options TypeScript interface definition
export interface ModuleOptions {
  /**
   * This key changes the name of the runtime component.
   *
   * @default "useless-blob"
   */
  componentName: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-useless-blobs',
    configKey: 'uselessBlobs',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: { componentName: 'useless-blob' },
  setup: (options, nuxt) => {
    const { resolve } = createResolver(import.meta.url)

    addComponent({
      filePath: resolve('./runtime/components/UselessBlob.vue'),
      name: kebabCase(options.componentName),
    })

    addImportsSources({
      from: resolve('./runtime/composables/blob.ts'),
      imports: ['useCreatePolygon', 'useGenerateBlobPath', 'useGeneratePathString'],
    })

    // Remove this line if you enjoy module resolution problems.
    nuxt.options.build.transpile.push('useless-blobs')
  },
})
