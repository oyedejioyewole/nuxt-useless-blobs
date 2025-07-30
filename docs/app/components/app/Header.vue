<script lang="ts" setup>
const features = [
  'Nuxt 3 ready.',
  'SSR ready.',
  'Typescript support.',
  'Auto-imported composable to create blob path strings.',
]
</script>

<template>
  <header
    class="grid max-lg:grid-flow-row min-lg:grid-flow-col max-lg:min-h-[calc(100vh_-_64px)] min-lg:h-[calc(100vh_-_96px)] place-items-center w-9/10 mx-auto gap-y-4"
  >
    <div class="space-y-4 basis-1/4">
      <!-- Tagline -->
      <h1 class="font-serif text-3xl min-lg:text-4xl font-bold">
        Create beautiful blobs in your project!
      </h1>

      <!-- Description -->
      <p>
        An easier way of using <span
          class="font-bold underline underline-offset-4 font-cursive"
        >useless-blobs</span> in your Nuxt project!
      </p>

      <!-- Feature list -->
      <ul class="space-y-2">
        <li
          v-for="(feature, _index) of features"
          :key="_index"
          class="flex gap-x-2"
        >
          <PhosphorIcon
            name="check"
          />
          {{ feature }}
        </li>
      </ul>

      <div class="flex flex-wrap gap-4">
        <UiButton
          icon="book-open"
          to="#setup"
        >
          Get started
        </UiButton>

        <UiButton
          icon="github-logo"
          variant="accent"
          to="https://github.com/oyedejioyewole/nuxt-useless-blobs"
        >
          View project
        </UiButton>
      </div>
    </div>

    <!-- Morphing blob -->
    <div
      class="max-lg:self-end min-lg:animate-bounce max-lg:order-first mx-auto fill-[url('#blobGradient')] blur-lg max-lg:w-64 min-lg:w-96"
    >
      <AppMorphingBlob />
    </div>
  </header>
</template>
