# Repository Guidelines

This repository contains the personal homepage of Zhihai Tu, built with Next.js 16, React 19, TypeScript, Tailwind CSS, and the App Router.

## Project Structure & Modules
- Application routes and pages live in `app/` (for example `app/page.tsx`, `app/layout.tsx`).
- Global styles are in `app/globals.css`; static assets (images, icons) are in `public/`.
- Tooling and configuration files (TypeScript, ESLint, Tailwind, Next.js) are in the repository root.

## Build, Test, and Development
- `npm run dev` – Start the local dev server at `http://localhost:3000`.
- `npm run build` – Create a production build (`.next/`).
- `npm start` – Run the production server using the last build.
- `npm run lint` – Run ESLint using `eslint.config.mjs`.

## Coding Style & Naming
- Use TypeScript with React function components and hooks; prefer `export default function Name()` for page/layout components.
- Follow the ESLint + `eslint-config-next` rules; run `npm run lint` before opening a PR.
- Use Tailwind utility classes for styling; keep class lists ordered by layout → spacing → typography → color when reasonable.
- Name files in `app/` using kebab-case or the Next.js conventions (`page.tsx`, `layout.tsx`).

## Testing Guidelines
- There is currently no dedicated automated test suite; rely on manual browser testing for layout, responsiveness, and dark mode.
- Before submitting changes, verify that `npm run build` and `npm run lint` both succeed.

## Commit & Pull Request Guidelines
- Use concise, descriptive commit messages, e.g. `feat: add certifications section` or `fix: update hero avatar styling`.
- For pull requests, include: purpose of the change, key implementation notes, screenshots or GIFs for UI changes, and any known limitations.
- Link related issues or tasks when applicable and note required manual testing steps (browsers, screen sizes, dark/light mode).

## Security & Configuration
- Do not commit secrets, API keys, or environment-specific credentials; use local `.env` files when needed.
- Keep dependencies up to date with `npm install` and review major upgrades for breaking changes in Next.js or React.

