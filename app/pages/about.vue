<script lang="ts" setup>
import Link from "~/components/Link.vue";

usePageMetadata({
  title: "About",
  description: "A page where I talk about me and SCSDC",
});
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="w-full lg:w-2/3 xl:w-2/5">
      <h1 class="uppercase text-primary text-5xl font-bold mb-1">about</h1>

      <p class="text-foreground text-xl">
        I'm a 17 year old with lots of passion for coding and UI/UX designing. I
        started learning how to code around 2025.
        <br />
        I don't have any degree yet, I'm in 12th grade and currently studying IT
        and Telecommunications at a technical high school.
        <br />
        My first project that made it into production was the
        <Link text="Create Mastery" link="createmastery.org" external />&nbsp;
        website. If the site doesn't show up it's because the domain needs to be
        updated.
        <Divider class="my-2" />
        I mainly do TUI/CLI applications because I love using the terminal. They
        are also pretty easy to make, which means I can focus more on the actual
        logic of the applications, tho I also like making GUI ones since they
        are more popular and user-friendly.
        <br />
        For web development I mainly do front-end because I'm not smart enough
        to make the back-end and because I like it more. I've built websites
        using
        <Link
          text="VitePress"
          link="fima.scsdc-co.org"
          class="mr-4"
          external
        />, Astro (the first version of my portfolio and the first rewrite of
        the Create Mastery website),
        <Link text="Next.js" link="createmastery.org" external />&nbsp; and Nuxt
        (this website).
      </p>
    </div>
  </div>
</template>
