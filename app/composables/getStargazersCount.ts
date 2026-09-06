export default function getStargazersCount(repo: string) {
  return useAsyncData('github-stargazers', () =>
    $fetch<{
      stargazers_count: number
    }>(`https://api.github.com/repos/${repo}`).then((repo) => repo.stargazers_count)
  )
}
