<script lang="ts" setup>
import { animate, svg } from 'animejs'

const { path, refresh } = useGenerateBlobPath({ width: 400, height: 400 })

useIntervalFn(async () => {
  await refresh()

  const temporaryPathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  temporaryPathElement.setAttribute('d', path.value ?? '')
  animate('svg#blob path', {
    d: svg.morphTo(temporaryPathElement),
    duration: 1000,
    ease: 'inOutSine',
  })
}, 3000)
</script>

<template>
  <UselessBlobs
    id="blob"
    :width="400"
    :height="400"
  >
    <defs>
      <linearGradient
        id="blobGradient"
      >
        <stop
          offset="5%"
          stop-color="#ddd8b8"
        />
        <stop
          offset="95%"
          stop-color="#634c25"
        />
      </linearGradient>
    </defs>
  </UselessBlobs>
</template>
