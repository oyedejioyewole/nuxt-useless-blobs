---
displayToc: true
---

# Get started

This page would guide you through using this module.

## Setup

Run the following command to add the module to your project:

```bash [>_]
$ pnpm dlx nuxi@latest module add nuxt-useless-blobs
```

You have successfully add the module to your project, congratulations 🎉

## Usage

I want to read about the:

::UiTabs{:tabs='["component", "composable"]'}

#tab-1

```vue
<UselessBlob />
```

You can use the props below to customize how the blob should look

::UiTabs{:tabs='["boundingShape", "height", "irregularity", "smoothing", "spikiness", "verts", "width"]'}

#tab-1

```vue
<UselessBlob boundingShape="rectangle" />
```

**Default:** `ellipsis`

Defines the shape where the blob's path would be confined to.

#tab-2

```vue
<UselessBlob :height="300" />
```

**Default:** `200`

Defines the internal height of the blob path and sets the `viewBox` height.

#tab-3

```vue
<UselessBlob :irregularity="0.3" />
```

**Default:** `0.25`

Defines the deviation between angles of each point.

#tab-4

```vue
<UselessBlob :smoothing="0.5" />
```

**Default:** `1`

Defines how rough the final curve of the blob would be.

#tab-5

```vue
<UselessBlob :spikiness="0.3" />
```

**Default:** `0.5`

Defines how much a point deviates away from the bounding shape

#tab-6

```vue
<UselessBlob :verts="10" />
```

**Default:** `6`

Defines the number of vertices the resulting blob shape would have

#tab-7

```vue
<UselessBlob :width="300" />
```

**Default:** `200`

Defines the internal width of the blob path and sets the `viewBox` width.
::

#tab-2
This module exports the following functions:

::UiTabs{:tabs='["useCreatePolygon", "useGenerateBlobPath", "useGeneratePathString"]'}

#tab-1

```ts
useCreatePolygon(options);
```

This function returns a 2-dimensional array of points which make up a polygon.

Below is a code snippet using this composable:

```vue [YourComponent]
<script lang="ts" setup>
const { mergedOptions, polygon, refresh } = useCreatePolygon({
  ...options,
  irregularity: 0.2,
});

console.log(mergedOptions.value); // Options merged with defaults
console.log(polygon.value); // [ [1, 1], [2, 2], [3, 3] ]

refresh(); // refreshes the polygon Ref<>
</script>
```

#tab-2

```ts
useGenerateBlobPath(options);
```

This function returns a `d` attribute of a random blob shape

Below is a code snippet using this composable:

```vue [YourComponent]
<script lang="ts" setup>
const { mergedOptions, path, refresh } = useGenerateBlobPath({
  ...options,
  spikiness: 0.2,
});

console.log(mergedOptions.value); // Options merged with defaults
console.log(path.value); // M124 ...

refresh(); // refreshes the path Ref<>
</script>
```

#tab-3
**Note:** this function is similar to `useGenerateBlobPath` in functionality, the difference is in the parameters.

```ts
useGeneratePathString(polygon, smoothing);
```

This function returns a `d` attribute of a random blob shape

Below is a code snippet using this composable:

```vue [YourComponent]
<script lang="ts" setup>
const { path, refresh } = useGeneratePathString(polygon, smoothingLevel);

console.log(path.value); // M125 ...

refresh(); // refreshes the path Ref<>
</script>
```

::

::

## Configuration

You can configure the module using the `uselessBlobs` key in the `nuxt.config`

Select a key from the options below to see details specific to such key

::UiTabs{:tabs='["componentName"]'}

#tab-1

```ts [nuxt.config]
export default defineNuxtConfig({
  uselessBlobs: {
    componentName: "blob",
  },
});
```

**Default:** `useless-blob`

This key allows you to set the name for the component registered by the module.

::
