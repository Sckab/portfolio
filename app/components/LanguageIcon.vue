<script lang="ts" setup>
const {
  language,
  tooltip,
  size = "40px",
  dark = false,
  family = "devicon",
} = defineProps<{
  language: string;
  tooltip: string;
  size?: string;
  dark?: boolean;
  family?: string;
}>();
</script>

<template>
  <div
    class="relative group inline-flex p-0.5 outline-none"
    :class="{ 'bg-foreground rounded-full': dark }"
    tabindex="0"
  >
    <Icon :name="`${family}:${language}`" :size="size" />

    <span
      class="absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-md bg-tertiary px-3 py-1 text-sm text-foreground whitespace-nowrap opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 border-primary border z-10"
      :aria-label="tooltip"
    >
      {{ tooltip }}
    </span>
  </div>
</template>
