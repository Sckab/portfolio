<div align=center>

# [Sckab's Portfolio](https://sckab.is-a.dev)

</div>

My personal portfolio and blog, built with Nuxt.

## Tech Stack

- Nuxt 4
- Vue
- TypeScript
- Tailwind CSS
- Nuxt Content

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Generate static site
pnpm generate
```

## Structure

```text
├── app/
│   ├── assets/       # Styles and assets
│   ├── components/   # Reusable Vue components
│   ├── composables/  # TypeScript logic
│   ├── pages/        # Site pages
│   ├── app.vue       # Global layout
│   ╰── error.vue     # Error pages
├── content/          # Blog articles managed by Nuxt Content
├── public/           # Favicon and images
├── nuxt.config.ts    # Nuxt and modules config
├── package.json      # Dependency and scripts declaration
╰── ...               # Other top-level files like README.md LICENSE ecc...
```
