<script lang="ts" setup>
import Link from "~/components/Link.vue";

import type { Project, ProjectStatus } from "~/composables/types/Project";

const projectStatusToBadgeColor = (status: ProjectStatus) => {
  switch (status) {
    case "Active":
      return "status";
    case "Completed":
      return "success";
    case "Archived":
      return "warning";
    case "Paused":
      return "error";
  }
};

const props = defineProps<{
  project: Project;
}>();
</script>

<template>
  <div
    class="border-primary border rounded-3xl p-3 pb-1 flex flex-col justify-between"
  >
    <div class="flex flex-row items-center justify-between flex-wrap">
      <div class="flex flex-row items-center gap-2">
        <h3 class="text-primary text-3xl font-bold">{{ project.name }}</h3>

        <Badge
          :label="project.status"
          :color="projectStatusToBadgeColor(project.status)"
        />
      </div>

      <div class="bg-tertiary inline-flex p-1 rounded-xl gap-1">
        <LanguageIcon
          v-for="icon in project.languages"
          :key="icon.language"
          :language="icon.language"
          :tooltip="icon.tooltip"
          :dark="icon.dark"
          :family="icon.family ?? 'devicon'"
          size="30px"
        />
      </div>
    </div>

    <p class="text-primary text-lg">
      {{ project.short_description }}
    </p>
    <Divider />
    <p class="text-foreground">{{ project.long_description }}</p>

    <Divider />

    <div class="inline-flex items-center justify-center w-full">
      <Link
        v-if="project.github"
        text="GitHub Repo"
        :link="'https://github.com/' + project.github"
        external
      />
      <div
        v-if="project.github && project.website"
        class="h-5 w-0.5 bg-tertiary rounded-full mx-1"
      ></div>
      <Link
        v-if="project.website"
        text="Website"
        :link="project.website"
        external
      />
      <div
        v-if="project.github"
        class="h-5 w-0.5 bg-tertiary rounded-full mx-1"
      ></div>
      <RepoStars v-if="project.github" :repo="project.github ?? ''" />
    </div>
  </div>
</template>
