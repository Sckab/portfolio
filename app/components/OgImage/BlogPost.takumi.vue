<script setup lang="ts">
const props = defineProps<{
  title: string;
  website: string;
}>();
</script>

<template>
  <div class="bg-secondary flex items-center flex-col justify-between">
    <div class="flex justify-between items-center p-10 w-full h-full">
      <div class="flex flex-col gap-3">
        <h1 class="text-primary text-6xl">{{ title }}</h1>

        <p class="text-[#d6d6d6] text-3xl">{{ website }}</p>
      </div>

      <div>
        <img
          src="/images/avatar.webp"
          alt="Sckab's avatar"
          class="rounded-full"
        />
      </div>
    </div>

    <div class="h-32 w-full">
      <Icon name="mdi:github" size="40px" class="text-primary" />
    </div>
  </div>
</template>
