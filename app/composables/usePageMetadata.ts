export default function usePageMetadata({
  title,
  description,
}: {
  title: string
  description: string
}) {
  defineOgImage('Default.takumi', {
    title: title,
    website: description,
  })

  useSeoMeta({
    title: title,
    description: description,
  })
}
