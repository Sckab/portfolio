<script lang="ts" setup>
import { ref } from "vue";

const isHoveredOrFocused = ref(false);

const props = defineProps<{
  text: string;
  link: string;
  secondary?: boolean;
}>();
</script>

<template>
  <NuxtLink
    class="flex flex-row items-center text-xl p-2 pl-4 pr-2 rounded-xl font-bold border-2 border-primary outline-none transition-colors"
    :class="secondary ? 'secondary' : 'primary'"
    :to="link"
    @mouseenter="isHoveredOrFocused = true"
    @mouseleave="isHoveredOrFocused = false"
    @focus="isHoveredOrFocused = true"
    @blur="isHoveredOrFocused = false"
  >
    {{ text }}

    <Icon
      v-if="isHoveredOrFocused"
      name="tabler:arrow-badge-right-filled"
      size="35px"
    />
    <Icon v-else name="tabler:arrow-badge-right" size="35px" />
  </NuxtLink>
</template>

<style>
@reference "../assets/css/main.css";

.primary {
  @apply text-secondary bg-primary
    hover:bg-secondary hover:text-primary hover:border-primary
    focus-visible:bg-secondary focus-visible:text-primary focus-visible:border-primary;
}

.secondary {
  @apply text-primary bg-secondary border-primary
    hover:bg-primary hover:text-secondary
    focus-visible:bg-primary focus-visible:text-secondary;
}
</style>
