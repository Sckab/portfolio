<script setup lang="ts">
const {
  link,
  text,
  external = false,
} = defineProps<{
  link: string;
  text: string;
  external?: boolean;
}>();
</script>

<template>
  <a
    v-if="external"
    :href="link"
    class="link"
    target="_blank"
    rel="noopener noreferrer"
    >{{ text }}</a
  >
  <NuxtLink v-else :to="link" class="link">{{ text }}</NuxtLink>
</template>

<style>
@reference "../assets/css/main.css";

.link {
  @apply text-link-fg font-bold outline-none
    hover:text-primary focus-visible:text-primary focus-visible:underline
    transition-colors;
}
</style>
