<script lang="ts" setup>
const description = "Sckab's personal portfolio and blog";

defineOgImage("Default.takumi", {
  title: "Sckab's Portfolio",
  website: description,
});

useHead({
  meta: [{ name: "description", content: description }],
});
</script>

<template></template>
