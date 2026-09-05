<script setup lang="ts">
import NavIcon from "~/components/NavIcon.vue";
import NavLink from "~/components/NavLink.vue";

const link = computed(() => (useRoute().path === "/" ? "" : "/"));
</script>

<template>
  <div class="h-dvh w-full bg-secondary font-default">
    <header
      class="h-24 border-b border-tertiary w-full flex flex-row p-3.5 justify-between"
    >
      <div class="flex justify-center items-center gap-3.5">
        <img
          src="/images/avatar.webp"
          alt="Sckab Avatar"
          class="h-full rounded-full outline-2 outline-primary outline-offset-2"
        />

        <NuxtLink
          :to="link"
          class="text-5xl font-bold select-none outline-none no-underline decoration-2 underline-offset-6 focus-visible:underline transition-colors"
          :class="{
            'text-primary': link.length === 0,
            'text-link-fg hover:text-primary focus-visible:text-primary':
              link.length !== 0,
          }"
        >
          <h1>SCKAB</h1>
        </NuxtLink>
      </div>

      <nav class="flex flex-row gap-3">
        <ul class="flex flex-row items-center justify-center gap-3">
          <li>
            <NavLink link="/projects">PROJECTS</NavLink>
          </li>
          <li>
            <div class="h-11 bg-tertiary w-0.5"></div>
          </li>
          <li>
            <NavLink link="/blog">BLOG</NavLink>
          </li>
        </ul>

        <div
          class="bg-tertiary rounded-3xl h-full w-fit flex flex-row justify-center items-center p-3.5 gap-3"
        >
          <NavIcon icon="ri:twitter-x-fill" link="https://x.com/Sckab_345" />
          <NavIcon
            icon="tabler:brand-leetcode"
            link="https://leetcode.com/u/Sckab"
          />
          <NavIcon icon="mdi:github" link="https://github.com/Sckab" />
        </div>
      </nav>
    </header>

    <main>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>
  </div>
</template>
