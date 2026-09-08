<script setup lang="ts">
const route = useRoute();

const link = computed(() => (route.path === "/" ? "" : "/"));

const menu = ref<HTMLElement | null>(null);
const isMenuLinkVisible = ref(false);

function handleClickOutside(event: MouseEvent) {
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
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

useHead({
  bodyAttrs: {
    class: "bg-secondary font-default flex flex-col",
  },
});
</script>

<template>
  <header
    class="h-24 border-b border-tertiary w-full flex flex-row p-3.5 justify-between"
  >
    <div class="flex justify-center items-center gap-3.5">
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
      <div class="hidden flex-row gap-3 sm:flex">
        <ul class="flex flex-row items-center justify-center gap-3">
          <li>
            <NavbarLink link="/projects">projects</NavbarLink>
          </li>
          <li>
            <div class="h-11 bg-tertiary w-0.5"></div>
          </li>
          <li>
            <NavbarLink link="/blog">blog</NavbarLink>
          </li>
        </ul>

        <div
          class="bg-tertiary rounded-3xl h-full w-fit flex flex-row justify-center items-center p-3.5 gap-3"
        >
          <NavbarIcon
            icon="ri:twitter-x-fill"
            link="https://x.com/Sckab_345"
            aria_label="X profile"
          />
          <NavbarIcon
            icon="tabler:brand-leetcode"
            link="https://leetcode.com/u/Sckab"
            aria_label="LeetCode profile"
          />
          <NavbarIcon
            icon="mdi:github"
            link="https://github.com/Sckab"
            aria_label="GitHub profile"
          />
        </div>
      </div>

      <div
        ref="menu"
        class="relative flex h-full items-center justify-center sm:hidden"
      >
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
            <li>
              <NavbarLink
                link="/projects"
                text="Projects"
                class="text-xl"
                active
              />
            </li>
            <li>
              <NavbarLink link="/blog" text="Blog" class="text-xl" active />
            </li>
            <li>
              <Divider />
            </li>
            <li class="flex flex-row">
              <NavbarIcon
                icon="ri:twitter-x-fill"
                link="https://x.com/Sckab_345"
                aria_label="X profile"
                active
              />
              <NavbarIcon
                icon="tabler:brand-leetcode"
                link="https://leetcode.com/u/Sckab"
                aria_label="LeetCode profile"
                active
              />
              <NavbarIcon
                icon="mdi:github"
                link="https://github.com/Sckab"
                aria_label="GitHub profile"
                active
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <main class="w-full flex-1 p-3">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </main>
</template>
