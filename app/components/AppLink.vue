<script setup lang="ts">
const { href, active = false } = defineProps<{
  href: string
  active?: boolean
}>()

const external: boolean = !href.startsWith('/')
</script>

<template>
  <a
    v-if="external"
    :href="'https://' + href"
    class="link inline-flex items-center group relative mr-2.5"
    :class="{ 'text-link-fg': !active, 'text-primary': active }"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />

    <Icon
      name="tabler:arrow-up-right"
      class="absolute left-full bottom-1/6 group-focus-visible:bottom-1/4 group-hover:bottom-1/4 transition-all duration-50"
    />
  </a>
  <NuxtLink
    v-else
    :to="href"
    class="link"
    :class="{ 'text-link-fg': !active, 'text-primary': active }"
  >
    <slot />
  </NuxtLink>
  <!-- The content is too close to the arrow, it's needed more space -->
  <span v-if="external" aria-hidden="true">&nbsp;</span>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.link {
  @apply font-bold outline-none
    hover:text-primary focus-visible:text-primary focus-visible:underline
    transition-colors;
}
</style>
