<script setup lang="ts">
const props = defineProps<{
  icon: string;
  link: string;
  aria_label: string;
}>();
</script>

<template>
  <a
    :href="link"
    class="inline-flex text-link-fg outline-0 focus-visible:outline-primary focus-visible:outline-2 focus-visible:rounded-xl hover:text-primary focus-visible:text-primary transition-colors"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="aria_label"
  >
    <Icon :name="icon" size="40px" />
  </a>
</template>
