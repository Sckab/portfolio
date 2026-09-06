<script setup lang="ts">
const {
  link,
  text,
  external = false,
  active = false,
} = defineProps<{
  link: string;
  text: string;
  external?: boolean;
  active?: boolean;
}>();
</script>

<template>
  <a
    v-if="external"
    :href="link"
    class="link inline-flex items-center group"
    :class="{ 'text-link-fg': !active, 'text-primary': active }"
    target="_blank"
    rel="noopener noreferrer"
  >
    {{ text }}

    <Icon
      name="tabler:arrow-up-right"
      class="mb-1 group-focus-visible:mb-2 group-hover:mb-2 transition-all duration-50"
    />
  </a>
  <NuxtLink
    v-else
    :to="link"
    class="link"
    :class="{ 'text-link-fg': !active, 'text-primary': active }"
  >
    {{ text }}
  </NuxtLink>
</template>

<style>
@reference "../assets/css/main.css";

.link {
  @apply font-bold outline-none
    hover:text-primary focus-visible:text-primary focus-visible:underline
    transition-colors;
}
</style>
