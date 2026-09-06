<script setup lang="ts">
import type { NuxtError } from "#app";
import Error from "~/components/Error.vue";
import Link from "~/components/Link.vue";

const props = defineProps<{ error: NuxtError }>();
</script>

<template>
  <div
    class="bg-secondary h-dvh flex items-center justify-center flex-col gap-3"
  >
    <h1 class="text-primary text-9xl font-bold">{{ error.status }}</h1>
    <Error class="text-4xl">{{ error.statusText }}</Error>
    <Link link="/" text="Go back home" class="text-xl" />
  </div>
</template>
