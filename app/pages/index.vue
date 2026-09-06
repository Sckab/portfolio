<script lang="ts" setup>
import HomeIcon from "~/components/HomeIcon.vue";
import Link from "~/components/Link.vue";
import IconsGroup from "~/components/IconsGroup.vue";
import CtaButton from "~/components/CtaButton.vue";

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
  <div
    class="gap-10 grid lg:px-10 lg:grid-cols-2 lg:min-h-[calc(100dvh-96px-24px)] xl:px-40"
  >
    <div class="flex flex-col justify-center h-full">
      <h1 class="text-primary text-6xl font-bold">Hello!</h1>

      <p class="text-foreground text-2xl">
        I'm a 12th grade student and a passionate software/front-end developer
        and co-founder of
        <Link link="https://github.com/SCSDC-co" text="SCSDC" external />. I
        love designing minimal, but useful interfaces with the best UX possible.
        I usually make TUI/CLI applications, but I also like building GUI ones.
      </p>

      <div class="mt-10 flex justify-center gap-3 md:justify-start">
        <CtaButton text="Projects" link="/projects" />
        <CtaButton text="Blog" link="/blog" secondary />
      </div>
    </div>

    <div class="flex items-center justify-center">
      <div class="bg-tertiary p-5 rounded-3xl flex flex-col gap-3 md:max-w-5/6">
        <h2 class="text-primary text-5xl font-bold">What i use</h2>

        <IconsGroup title="Languages">
          <HomeIcon language="cplusplus" tooltip="C++" />
          <HomeIcon language="python" tooltip="Python" />
          <HomeIcon language="lua" tooltip="Lua" />
        </IconsGroup>

        <IconsGroup title="Web">
          <HomeIcon language="html5" tooltip="HTML" />
          <HomeIcon language="css" tooltip="CSS" />
          <HomeIcon language="javascript" tooltip="JavaScript" />
          <HomeIcon language="typescript" tooltip="TypeScript" />
          <HomeIcon language="tailwindcss" tooltip="Tailwind CSS" />
          <HomeIcon language="astro" tooltip="Astro" dark />
          <HomeIcon language="nextjs" tooltip="Next.js" />
          <HomeIcon language="react" tooltip="React" />
          <HomeIcon language="nuxt" tooltip="Nuxt" />
          <HomeIcon language="vuejs" tooltip="Vue" />
          <HomeIcon language="nodejs" tooltip="Node.js" />
        </IconsGroup>

        <IconsGroup title="Tools">
          <HomeIcon language="uv" tooltip="Uv Python Package Manager" />
          <HomeIcon language="cmake" tooltip="CMake" />
          <HomeIcon language="git" tooltip="Git" />
          <HomeIcon language="gitlab" tooltip="GitLab" />
          <HomeIcon language="github" tooltip="GitHub" dark />
          <HomeIcon language="githubactions" tooltip="GitHub Actions" />
          <HomeIcon language="bash" tooltip="Bash" dark />
          <HomeIcon language="markdown" tooltip="Markdown" dark />
        </IconsGroup>

        <IconsGroup title="Environment">
          <HomeIcon language="archlinux" tooltip="Arch Linux" />
          <HomeIcon language="neovim" tooltip="Neovim" />
        </IconsGroup>
      </div>
    </div>
  </div>
</template>
