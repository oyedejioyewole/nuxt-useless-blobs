<script lang="ts" setup>
const { pastelDocs } = useAppConfig()

useSeoMeta({
  title: 'Home',
  description: pastelDocs.headline,
})
</script>

<template>
  <main>
    <AppHeader right-slot-classes="place-self-center">
      <template #aside>
        <MorphingBlob class="size-100 blur-lg" />
      </template>
    </AppHeader>
  </main>
</template>
