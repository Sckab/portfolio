<script lang="ts" setup>
const route = useRoute();

const menu = ref<HTMLElement | null>(null);

const isMenuLinkVisible = ref(false);

function handleClickOutsideMenu(event: MouseEvent) {
  if (menu.value && !menu.value.contains(event.target as Node)) {
    isMenuLinkVisible.value = false;
  }
}

watch(
  () => route.path,
  () => {
    isMenuLinkVisible.value = false;
  },
);

onMounted(() => {
  document.addEventListener("click", handleClickOutsideMenu);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutsideMenu);
});
</script>

<template>
  <div ref="menu" class="relative h-full items-center justify-center">
    <button
      class="inline-flex outline-none"
      :aria-label="isMenuLinkVisible ? 'Close menu' : 'Open menu'"
      :aria-expanded="isMenuLinkVisible"
      @click="isMenuLinkVisible = !isMenuLinkVisible"
    >
      <Icon
        :name="isMenuLinkVisible ? 'tabler:x' : 'tabler:menu-2'"
        size="50px"
        class="text-primary"
      />
    </button>

    <div
      v-if="isMenuLinkVisible"
      class="absolute right-0 top-full flex flex-col gap-3 rounded-xl bg-tertiary p-4 z-50"
    >
      <ul>
        <slot />
      </ul>
    </div>
  </div>
</template>
