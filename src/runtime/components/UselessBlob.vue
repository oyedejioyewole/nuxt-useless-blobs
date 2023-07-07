<script setup lang="ts">
import { createPolygon, generatePathString } from "useless-blobs";

const props = defineProps({
  vertices: {
    type: Number,
    default: 6,
  },
  width: {
    type: Number,
    default: 200,
  },
  height: {
    type: Number,
    default: 200,
  },
  irregularity: {
    type: Number,
    default: 0.25,
  },
  spikiness: {
    type: Number,
    default: 0.5,
  },
  boundingShape: {
    type: String,
    default: "ellipsis",
    validator: (value: string) => {
      return value === "rectangle" || value === "ellipsis";
    },
  },
  smoothing: {
    type: Number,
    default: 1,
  },
});

const path = generatePathString(
  createPolygon({
    verts: props.vertices,
    width: props.width,
    height: props.height,
    irregularity: props.irregularity,
    spikiness: props.spikiness,
    boundingShape: props.boundingShape as "rectangle" | "ellipsis",
  }),
  props.smoothing
);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    :viewBox="`0 0 ${props.width} ${props.height}`"
  >
    <path :d="path" />
  </svg>
</template>
