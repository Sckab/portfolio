<script lang="ts" setup>
import Link from "~/components/Link.vue";

usePageMetadata({
  title: "Sckab's Portfolio",
  description: "Sckab's personal portfolio and blog",
});
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-3 lg:gap-0 lg:min-h-[calc(100dvh-96px-24px)]"
  >
    <div class="flex-1 gap-10 grid lg:px-10 lg:grid-cols-2 xl:px-40">
      <div class="flex flex-col justify-center h-full">
        <h1 class="text-primary text-6xl font-bold">Hello!</h1>

        <p class="text-foreground text-2xl">
          I'm a 12th grade student and a passionate software/front-end developer
          and co-founder of
          <Link
            link="https://github.com/SCSDC-co"
            text="SCSDC"
            external
            class="mr-5"
          />. I love designing minimal, but useful interfaces with the best UX
          possible. I usually make TUI/CLI applications because I really like
          the minimalism of the terminal, but I also like building GUI ones.
        </p>

        <div class="mt-10 flex flex-wrap justify-center gap-3 md:justify-start">
          <IndexCtaButton text="Projects" link="/projects" />
          <IndexCtaButton text="Blog" link="/blog" secondary />
          <IndexCtaButton text="About" link="/about" secondary />
        </div>
      </div>

      <div class="flex items-center justify-center">
        <div
          class="bg-tertiary p-5 rounded-3xl flex flex-col gap-3 md:max-w-5/6"
        >
          <h2 class="text-primary text-5xl font-bold">What i use</h2>

          <IndexLanguageIconsGroup title="Languages">
            <LanguageIcon language="cplusplus" tooltip="C++" />
            <LanguageIcon language="python" tooltip="Python" />
            <LanguageIcon language="lua" tooltip="Lua" />
          </IndexLanguageIconsGroup>

          <IndexLanguageIconsGroup title="Web">
            <LanguageIcon language="html5" tooltip="HTML" />
            <LanguageIcon language="css" tooltip="CSS" />
            <LanguageIcon language="javascript" tooltip="JavaScript" />
            <LanguageIcon language="typescript" tooltip="TypeScript" />
            <LanguageIcon language="tailwindcss" tooltip="Tailwind CSS" />
            <LanguageIcon language="astro" tooltip="Astro" dark />
            <LanguageIcon language="nextjs" tooltip="Next.js" />
            <LanguageIcon language="react" tooltip="React" />
            <LanguageIcon language="nuxt" tooltip="Nuxt" />
            <LanguageIcon language="vuejs" tooltip="Vue" />
            <LanguageIcon language="nodejs" tooltip="Node.js" />
          </IndexLanguageIconsGroup>

          <IndexLanguageIconsGroup title="Tools">
            <LanguageIcon language="cmake" tooltip="CMake" />
            <LanguageIcon
              language="file-type-ninja"
              tooltip="Ninja"
              family="vscode-icons"
            />
            <LanguageIcon
              language="file-type-conan"
              tooltip="Conan"
              family="vscode-icons"
            />
            <LanguageIcon language="uv" tooltip="Uv Python Package Manager" />
            <LanguageIcon language="git" tooltip="Git" />
            <LanguageIcon language="gitlab" tooltip="GitLab" />
            <LanguageIcon language="github" tooltip="GitHub" dark />
            <LanguageIcon language="githubactions" tooltip="GitHub Actions" />
            <LanguageIcon language="bash" tooltip="Bash" dark />
            <LanguageIcon language="markdown" tooltip="Markdown" dark />
          </IndexLanguageIconsGroup>

          <IndexLanguageIconsGroup title="Environment">
            <LanguageIcon language="archlinux" tooltip="Arch Linux" />
            <LanguageIcon language="neovim" tooltip="Neovim" />
          </IndexLanguageIconsGroup>
        </div>
      </div>
    </div>

    <div
      class="w-fit p-5 rounded-3xl flex flex-row items-center justify-center bg-tertiary xl:mb-14"
    >
      <span class="text-foreground">
        This project is open source ·
        <Link
          text="GitHub Repo"
          link="https://github.com/Sckab/portfolio"
          external
        />
        ·
        <RepoStars repo="Sckab/portfolio" />
      </span>
    </div>
  </div>
</template>
