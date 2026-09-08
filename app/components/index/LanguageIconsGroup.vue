<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-1 w-full bg-secondary p-3 rounded-xl">
    <h3 class="text-primary text-3xl">{{ title }}</h3>

    <div class="flex flex-wrap gap-1">
      <slot />
    </div>
  </div>
</template>
