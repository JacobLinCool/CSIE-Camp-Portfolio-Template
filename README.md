# Portfolio Template

An example website made for Modern Web Development Guided Project, one of the courses in NTNU CSIE Camp 2022.

## Setup

1. Install [PNPM](https://pnpm.io/)
   - `curl -fsSL https://get.pnpm.io/install.sh | sh -`
2. Install [Node.js 16+](https://nodejs.org/)
   - `pnpm env use --global lts`
3. Install the dependencies
   - `pnpm i`
4. Run the development server
   - `pnpm dev`

Now, you should be able to visit the website at `http://localhost:3000`.

## Build

- `pnpm build`

The built website will be placed in `dist/`.

And you can use `pnpm preview` to preview the built website in your browser.

## Tech Stack

- [![][icon-vue] Vue 3](https://vuejs.org/) (JS Framework)
- [![][icon-tailwind] TailwindCSS](https://tailwindcss.com/) (CSS Framework)
- Vue Router (SPA Router)
- [![][icon-vite] Vite](https://vitejs.dev/) (Dev Server, Bundler)

[icon-vue]: https://api.iconify.design/logos:vue.svg
[icon-tailwind]: https://api.iconify.design/logos:tailwindcss-icon.svg
[icon-vite]: https://api.iconify.design/logos:vitejs.svg
