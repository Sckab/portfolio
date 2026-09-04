<script setup lang="ts">
const props = defineProps<{
  icon: string;
  link: string;
}>();
</script>

<template>
  <a
    :href="props.link"
    class="inline-flex outline-0 focus-visible:outline-primary focus-visible:outline-2 focus-visible:rounded-xl"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon :name="props.icon" size="40px" class="text-primary" />
  </a>
</template>
