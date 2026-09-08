<script setup lang="ts">
const {
  icon,
  link,
  aria_label,
  active = false,
} = defineProps<{
  icon: string;
  link: string;
  aria_label: string;
  active?: boolean;
}>();
</script>

<template>
  <a
    :href="link"
    class="inline-flex outline-0 focus-visible:outline-primary focus-visible:outline-2 focus-visible:rounded-xl hover:text-primary focus-visible:text-primary transition-colors"
    :class="{ 'text-link-fg': !active, 'text-primary': active }"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="aria_label"
  >
    <Icon :name="icon" size="40px" />
  </a>
</template>
