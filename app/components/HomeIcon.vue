<script lang="ts" setup>
const props = defineProps<{
  language: string;
  tooltip: string;
  dark?: boolean;
}>();
</script>

<template>
  <div
    class="relative group inline-flex p-0.5 outline-none"
    :class="{ 'bg-foreground rounded-full': dark }"
    tabindex="0"
  >
    <Icon :name="`devicon:${language}`" size="40px" />

    <span
      class="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-md bg-tertiary px-3 py-1 text-sm text-foreground whitespace-nowrap opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 border-primary border z-50"
      :aria-label="tooltip"
    >
      {{ tooltip }}
    </span>
  </div>
</template>
