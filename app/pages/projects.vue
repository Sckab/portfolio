<script lang="ts" setup>
import type { Project } from "~/composables/types/Project";

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
    short_description: "A tool to get informations of a directory/file.",
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
];
</script>

<template>
  <div class="w-full flex justify-center">
    <div
      class="w-full flex flex-col items-center justify-center gap-2 xl:w-3/4"
    >
      <h1 class="uppercase text-3xl text-primary">projects</h1>

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
