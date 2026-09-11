<script lang="ts" setup>
import type { Project } from "~/composables/types/Project";

usePageMetadata({
  title: "Projects",
  description: "A collection of the major projects I've worked on.",
});

const projects: Project[] = [
  {
    name: "FIMA",
    status: "Active",
    short_description: "Fast Incredible Minimal Awesome File Manager",
    long_description:
      "A filesystem toolkit powered by FTXUI, libgit2 and other libraries, written in modern C++23 for exploring, analyzing, and managing files and directories from the command line. FIMA provides tools such as directory listing, file information, line counting, filesystem metadata handling, and more, with a focus on simplicity, performance, and cross-platform support.",
    github: "SCSDC-co/FIMA",
    website: "fima.scsdc-co.org",
    languages: [
      { language: "cplusplus", tooltip: "C++" },
      { language: "cmake", tooltip: "CMake" },
      { language: "file-type-conan", tooltip: "Conan", family: "vscode-icons" },
      { language: "file-type-ninja", tooltip: "Ninja", family: "vscode-icons" },
    ],
  },
  {
    name: "DINFO",
    status: "Archived",
    short_description: "A tool for analyzing files and directories.",
    long_description:
      "A directory analysis tool written in C# that provides detailed insights into files and directories through an interactive terminal interface powered by Spectre.Console. DINFO can analyze directory structures, count files and subdirectories, calculate total size, count lines of code, inspect file types and extensions, and display filesystem information and metadata.",
    github: "SCSDC-co/DINFO",
    languages: [
      { language: "csharp", tooltip: "C#" },
      { language: "dotnet", tooltip: ".NET", family: "logos" },
    ],
  },
  {
    name: "Create Mastery",
    status: "Paused",
    short_description: "The official Create Mastery website",
    long_description:
      "A comprehensive guide for Minecraft's Create Mod, designed to help players learn its mechanics, automation systems, and engineering concepts. Create Mastery provides clear explanations and practical examples for building increasingly complex machines and contraptions.",
    github: "Create-Mastery/website",
    languages: [
      { language: "nextjs", tooltip: "Next.js" },
      { language: "tailwindcss", tooltip: "TailwindCSS" },
    ],
  },
  {
    name: "Portfolio",
    status: "Active",
    short_description: "My personal developer portfolio (this website).",
    long_description:
      "A personal portfolio website built with Nuxt, Vue, TypeScript, and Tailwind CSS, designed to showcase my projects, skills, and experience. The site focuses on accessibility, responsive design, performance, and modern web development practices.",
    github: "Sckab/portfolio",
    languages: [
      { language: "nuxt", tooltip: "Nuxt" },
      { language: "vuejs", tooltip: "Vue" },
      { language: "typescript", tooltip: "TypeScript" },
      { language: "tailwindcss", tooltip: "Tailwind CSS" },
    ],
  },
];
</script>

<template>
  <div class="w-full flex justify-center">
    <div
      class="w-full flex flex-col items-center justify-center gap-2 xl:w-3/4"
    >
      <div class="flex flex-col items-center">
        <h1 class="uppercase text-3xl text-primary">projects</h1>

        <p class="text-foreground md:w-3/4 lg:w-1/2">
          These are some of the major projects I've worked on. They range from
          TUI applications to static websites, and I believe they represent my
          current skills as a software and front-end web developer quite well.
        </p>
      </div>

      <div class="grid gap-3 items-start md:grid-cols-2 lg:grid-cols-3">
        <ProjectsCard
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>
