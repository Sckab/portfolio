<script lang="ts" setup>
import Link from "~/components/Link.vue";

const description = "Sckab's personal portfolio and blog";

defineOgImage("Default.takumi", {
  title: "Sckab's Portfolio",
  website: description,
});

useHead({
  meta: [{ name: "description", content: description }],
});
</script>

<template>
  <div class="w-full h-full columns-2 gap-10 px-40">
    <div class="flex flex-col justify-center h-full">
      <h2 class="text-primary text-6xl font-bold">Hello!</h2>

      <p class="text-foreground text-2xl">
        I'm an 12th grade student and a passionate software/front-end developer
        and co-founder of
        <Link link="https://github.com/SCSDC-co" text="SCSDC" external />. I
        love building clean, user-friendly UI/UX designs for websites and
        desktop apps, turning designs into fast, accessible, and maintainable
        interfaces.
      </p>
    </div>

    <div class="flex items-center justify-center h-full"></div>
  </div>
</template>
