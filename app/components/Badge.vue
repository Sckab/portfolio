<script lang="ts" setup>
type BadgeColor = "success" | "status" | "warning" | "error";
type BadgeSize = "small" | "medium" | "large";

const sizeToTextSize: Record<BadgeSize, string> = {
  small: "text-sm",
  medium: "text-base",
  large: "text-lg",
};

const {
  label,
  color = "success",
  size = "small",
} = defineProps<{
  label: string;
  color?: BadgeColor;
  size?: BadgeSize;
}>();
</script>

<template>
  <span class="border rounded-full px-2" :class="[color, sizeToTextSize[size]]">
    {{ label }}
  </span>
</template>

<style scoped>
@reference "~/assets/css/main.css";

.success {
  @apply text-primary border-primary bg-primary-bg;
}
.status {
  @apply text-status border-status bg-status-bg;
}
.warning {
  @apply text-warning border-warning bg-warning-bg;
}
.error {
  @apply text-error border-error bg-error-bg;
}
</style>
