# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

"New Light" — a Next.js application using the App Router with TypeScript.

## Tech Stack

- **Next.js 16** (App Router, `src/` directory)
- **Tailwind CSS v4** (via `@tailwindcss/postcss`)
- **shadcn/ui v4** (components in `src/components/ui/`, utility `cn()` in `src/lib/utils.ts`)
- **Framer Motion** (animations)
- **TypeScript**

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Project Structure

```
src/
├── app/           # Next.js App Router (pages, layouts, globals.css)
├── components/ui/ # shadcn/ui components
└── lib/utils.ts   # Utility functions (cn helper for className merging)
```

## Adding shadcn/ui Components

```bash
npx shadcn@latest add <component-name>
```
