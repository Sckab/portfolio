export type ProjectStatus = 'Active' | 'Completed' | 'Archived' | 'Paused'

export type Project = {
  name: string
  status: ProjectStatus
  short_description: string
  long_description: string
  languages: {
    language: string
    tooltip: string
    dark?: boolean
    family?: string
  }[]
  github?: string
  website?: string
}
