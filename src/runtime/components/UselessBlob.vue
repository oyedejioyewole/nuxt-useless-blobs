<script lang="ts" setup>
import { useTemplateRef } from '#imports'
import type { CreateBlob } from 'useless-blobs/lib/src/types'
import { useGenerateBlobPath } from '../composables/blob'

const { pathStyle, ...options } = defineProps<CreateBlob & { pathStyle?: string }>()

const { mergedOptions, path } = useGenerateBlobPath(options)
const pathElement = useTemplateRef('path-element')

defineExpose({
  pathElement,
})
</script>

<template>
  <svg
    fill="currentColor"
    overflow="visible"
    :viewBox="`0 0 ${mergedOptions.width} ${mergedOptions.height}`"
  >
    <slot />

    <path
      ref="path-element"
      :d="path"
      :style="pathStyle"
    />
  </svg>
</template>
