<script setup lang="ts">
const props = defineProps<{
  link: string;
}>();
</script>

<template>
  <NuxtLink
    :to="props.link"
    class="text-primary text-3xl font-bold select-none outline-none no-underline decoration-2 underline-offset-6 focus-visible:underline"
  >
    <slot />
  </NuxtLink>
</template>
