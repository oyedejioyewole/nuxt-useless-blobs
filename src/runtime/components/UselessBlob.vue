<script lang="ts" setup>
import { useGenerateBlobPath } from '../composables/blob'
import type { CreateBlob } from 'useless-blobs/lib/src/types'

const { pathStyle, ...options } = defineProps<CreateBlob & { pathStyle?: string }>()

const { mergedOptions, path } = useGenerateBlobPath(options)
</script>

<template>
  <svg
    overflow="visible"
    :viewBox="`0 0 ${mergedOptions.width} ${mergedOptions.height}`"
  >
    <slot />

    <path
      :d="path"
      :style="pathStyle"
    />
  </svg>
</template>
