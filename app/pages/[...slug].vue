<script setup lang="ts">
const route = useRoute();

const { data: page } = await useAsyncData("page-" + route.path, () => {
  return queryCollection("content").path(route.path).first();
});

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

usePageMetadata({
  title: page.value.title,
  description: page.value.description,
});
</script>

<template>
  <div class="w-full flex justify-center">
    <article class="prose prose-portfolio w-full lg:w-2/3 lg:prose-lg xl:w-2/5">
      <ContentRenderer v-if="page" :value="page" />
    </article>
  </div>
</template>
