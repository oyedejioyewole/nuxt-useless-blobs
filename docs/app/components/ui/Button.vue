<script lang="ts" setup>
import type { PhosphorIconName } from '#phosphor-icons/types'

withDefaults(
  defineProps<{ icon?: PhosphorIconName, includesCode?: boolean, to?: string, variant?: 'primary' | 'accent' }>(),
  { variant: 'primary' },
)

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="$props.to ? NuxtLink : 'button'"
    :to="to"
    class="inline-flex items-center gap-x-2 rounded-lg px-4 py-2 font-bold w-fit text-sm"
    :class="{ 'bg-primary-900 text-primary-500': $props.variant === 'primary', 'text-primary-900  bg-primary-500': $props.variant === 'accent' }"
  >
    <PhosphorIcon
      :name="icon"
      :size="16"
    />

    <slot />
  </component>
</template>
