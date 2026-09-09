<script setup lang="ts">
const route = useRoute();

const link = computed(() => (route.path === "/" ? "" : "/"));

const navbarLinks: { name: string; link: string }[] = [
  { name: "projects", link: "/projects" },
  { name: "blog", link: "/blog" },
  { name: "about", link: "/about" },
];

const navbarIcons: { icon: string; link: string; aria_label: string }[] = [
  {
    icon: "ri:twitter-x-fill",
    link: "https://x.com/Sckab_345",
    aria_label: "X profile",
  },
  {
    icon: "tabler:brand-leetcode",
    link: "https://leetcode.com/u/Sckab",
    aria_label: "LeetCode profile",
  },
  {
    icon: "mdi:github",
    link: "https://github.com/Sckab",
    aria_label: "GitHub profile",
  },
];

useHead({
  titleTemplate: (title) => {
    if (!title || title === "Sckab's Portfolio") {
      return "Sckab's Portfolio";
    }

    return `${title} | Sckab's Portfolio`;
  },

  bodyAttrs: {
    class: "bg-secondary font-default flex flex-col",
  },
});
</script>

<template>
  <header
    class="h-24 border-b border-tertiary w-full flex flex-row p-3.5 justify-between"
  >
    <div class="flex items-center gap-3.5">
      <NuxtLink :to="link" class="h-full">
        <img
          src="/images/avatar.webp"
          alt="Sckab Avatar"
          class="h-full aspect-square rounded-full outline-2 outline-primary outline-offset-2"
        />
      </NuxtLink>

      <NuxtLink
        :to="link"
        class="text-5xl font-bold hidden select-none outline-none no-underline decoration-2 underline-offset-6 focus-visible:underline transition-colors md:inline"
        :class="{
          'text-primary': link.length === 0,
          'text-link-fg hover:text-primary focus-visible:text-primary':
            link.length !== 0,
        }"
      >
        <h2 class="uppercase">sckab</h2>
      </NuxtLink>
    </div>

    <nav>
      <div class="hidden flex-row items-center justify-center gap-3 sm:flex">
        <ul class="hidden flex-row items-center justify-center gap-3 lg:flex">
          <template v-for="(item, index) in navbarLinks" :key="item.link">
            <li>
              <NavbarLink :link="item.link">
                {{ item.name }}
              </NavbarLink>
            </li>

            <li v-if="index < navbarLinks.length - 1">
              <div class="h-11 bg-tertiary w-0.5"></div>
            </li>
          </template>
        </ul>

        <NavbarDropdown class="sm:flex lg:hidden">
          <li v-for="link in navbarLinks" :key="link.link">
            <NavbarLink
              :link="link.link"
              :text="link.name"
              class="text-xl capitalize"
              active
            />
          </li>
        </NavbarDropdown>

        <div
          class="bg-tertiary rounded-3xl h-full w-fit flex flex-row justify-center items-center p-3.5 gap-3"
        >
          <NavbarIcon
            v-for="icon in navbarIcons"
            :key="icon.icon"
            :icon="icon.icon"
            :link="icon.link"
            :aria_label="icon.aria_label"
          />
        </div>
      </div>

      <NavbarDropdown class="flex sm:hidden">
        <li v-for="link in navbarLinks" :key="link.link">
          <NavbarLink
            :link="link.link"
            :text="link.name"
            class="text-xl capitalize"
            active
          />
        </li>
        <li>
          <Divider />
        </li>
        <li class="flex flex-row">
          <NavbarIcon
            v-for="icon in navbarIcons"
            :key="icon.icon"
            :icon="icon.icon"
            :link="icon.link"
            :aria_label="icon.aria_label"
          />
        </li>
      </NavbarDropdown>
    </nav>
  </header>

  <main class="w-full flex-1 p-3">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </main>
</template>
