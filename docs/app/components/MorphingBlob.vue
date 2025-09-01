<script lang="ts" setup>
import { animate, svg } from 'animejs'

const { path, refresh } = useGenerateBlobPath({ width: 400, height: 400 })

useIntervalFn(async () => {
  await refresh()

  const temporaryPathElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path',
  )
  temporaryPathElement.setAttribute('d', path.value ?? '')
  animate('svg#blob path', {
    d: svg.morphTo(temporaryPathElement),
    duration: 1000,
    ease: 'inOutSine',
  })
}, 3000)
</script>

<template>
  <UselessBlob
    id="blob"
    :width="400"
    :height="400"
    path-style="fill: url(#blobGradient)"
  >
    <defs>
      <linearGradient id="blobGradient">
        <stop
          offset="5%"
          style="stop-color: var(--color-primary-300)"
        />
        <stop
          offset="95%"
          style="stop-color: var(--color-primary-700)"
        />
      </linearGradient>
    </defs>
  </UselessBlob>
</template>
