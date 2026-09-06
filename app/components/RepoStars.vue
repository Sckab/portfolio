<script lang="ts" setup>
const { repo } = defineProps<{
  repo: string;
}>();

const repoStargazersReq = getStargazersCount(repo);
</script>

<template>
  <Status v-if="repoStargazersReq.pending.value">
    Loading the repo stars...
  </Status>
  <Error v-else-if="repoStargazersReq.error.value">
    Failed to load the repo stars
  </Error>
  <span v-else class="text-foreground">
    <Icon name="tabler:star-filled" class="text-yellow-300" />
    {{ repoStargazersReq.data }}
  </span>
</template>
