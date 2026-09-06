<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="icons_group">
    <h3 class="icons_title">{{ title }}</h3>

    <div class="icons_wrapper">
      <slot />
    </div>
  </div>
</template>

<style>
@reference "../assets/css/main.css";

.icons_group {
  @apply flex flex-col gap-1 w-full bg-secondary p-3 rounded-xl;
}

.icons_title {
  @apply text-primary text-3xl;
}

.icons_wrapper {
  @apply flex flex-wrap gap-1;
}
</style>
