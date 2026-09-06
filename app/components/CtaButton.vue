<script lang="ts" setup>
const isHoveredOrFocused = ref(false);

const props = defineProps<{
  text: string;
  link: string;
  secondary?: boolean;
  external?: boolean;
}>();
</script>

<template>
  <a
    v-if="external"
    class="cta_link"
    target="_blank"
    rel="noopener noreferrer"
    :class="secondary ? 'secondary' : 'primary'"
    :href="link"
    @mouseenter="isHoveredOrFocused = true"
    @mouseleave="isHoveredOrFocused = false"
    @focus="isHoveredOrFocused = true"
    @blur="isHoveredOrFocused = false"
  >
    {{ text }}

    <Icon
      :name="
        isHoveredOrFocused
          ? 'tabler:arrow-badge-right-filled'
          : 'tabler:arrow-badge-right'
      "
      size="35px"
    />
  </a>
  <NuxtLink
    v-else
    class="cta_link"
    :class="secondary ? 'secondary' : 'primary'"
    :to="link"
    @mouseenter="isHoveredOrFocused = true"
    @mouseleave="isHoveredOrFocused = false"
    @focus="isHoveredOrFocused = true"
    @blur="isHoveredOrFocused = false"
  >
    {{ text }}

    <Icon
      :name="
        isHoveredOrFocused
          ? 'tabler:arrow-badge-right-filled'
          : 'tabler:arrow-badge-right'
      "
      size="35px"
    />
  </NuxtLink>
</template>

<style>
@reference "../assets/css/main.css";

.cta_link {
  @apply flex flex-row items-center text-xl p-2 pl-4 pr-2 rounded-xl font-bold border-2
    border-primary outline-none transition-colors;
}

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
