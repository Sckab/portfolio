<script setup lang="ts">
const props = defineProps<{
  link: string;
}>();
</script>

<template>
  <NuxtLink
    :to="props.link"
    class="uppercase text-link-fg text-3xl font-bold select-none outline-none no-underline decoration-2 underline-offset-6 focus-visible:underline focus-visible:text-primary hover:text-primary transition-colors"
  >
    <slot />
  </NuxtLink>
</template>
