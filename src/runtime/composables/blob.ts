import type { ComputedRef, Ref } from '#imports'
import { computed, useAsyncData, useId } from '#imports'
import { defu } from 'defu'
import generateBlobPath, { createPolygon, generatePathString } from 'useless-blobs'
import type { CreateBlob, CreatePolygon, Point } from 'useless-blobs/lib/src/types'

const DEFAULTS = { boundingShape: 'ellipsis', height: 200, irregularity: 0.25, smoothing: 1, spikiness: 0.5, verts: 6, width: 200 } satisfies CreateBlob

interface BlobPathReturn {
  mergedOptions: ComputedRef<CreateBlob>
  path: Ref<string | undefined>
  refresh: () => Promise<void>
}

interface PolygonReturn {
  mergedOptions: ComputedRef<CreatePolygon>
  polygon: Ref<Point[] | undefined>
  refresh: () => Promise<void>
}

interface PathStringReturn {
  path: Ref<string | undefined>
  refresh: () => Promise<void>
}

/**
 * This function returns a `d` attribute of a random blob shape
 * @param options - See https://nuxt-useless-blobs.vercel.app
 */
export const useGenerateBlobPath = (options?: CreateBlob): BlobPathReturn => {
  const mergedOptions = computed(() => defu(options, DEFAULTS))
  const { data: path, refresh } = useAsyncData(`blob-path-${useId()}`, async () => generateBlobPath(mergedOptions.value))

  return { mergedOptions, path, refresh }
}

/**
 * This function returns a 2-dimensional array of points which make up a polygon
 * @param options - See https://nuxt-useless-blobs.vercel.app
 */
export const useCreatePolygon = (options?: CreatePolygon): PolygonReturn => {
  const mergedOptions = computed(() => defu(options, DEFAULTS))
  const { data: polygon, refresh } = useAsyncData(`polygon-${useId()}`, async () => createPolygon(mergedOptions.value))

  return { mergedOptions, polygon, refresh }
}

/**
 * This function returns a `d` attribute of a random blob shape
 * @param polygonPoints - a 2-dimensional array of polygon points
 * @param smoothing - how smooth should connections between points be?
 */
export const useGeneratePathString = (polygonPoints: Point[], smoothing?: number): PathStringReturn => {
  const { data: path, refresh } = useAsyncData(`blob-path-${useId()}`, async () => generatePathString(polygonPoints, smoothing))

  return { path, refresh }
}
