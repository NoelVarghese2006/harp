# HARP Portal

HackUTD's hacker, admin, and super-admin portal. Built with Vite, React,
Zustand, React Hook Form + Zod, and shadcn/Radix.

## Commands

```bash
npm run dev            # Start the dev server (port 3000)
npm run build          # Type-check and build for production
npm run lint           # ESLint
npm run format         # Prettier write
npm run format:check   # Prettier check

npm test               # Run unit tests once
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Run tests with a coverage report (no threshold enforced)
```

## Testing

Unit tests use **Vitest** with the **jsdom** environment and **Testing
Library**.

- **Placement:** tests are co-located with the code they exercise as
  `<name>.test.ts(x)` beside the source module (e.g.
  `src/shared/lib/datetime.test.ts`). Shared setup — DOM matchers and cleanup —
  lives in `src/test/setup.ts` and runs before every test file.
- **Timezone:** all test commands pin `TZ=America/Chicago` so date- and
  schedule-dependent assertions are deterministic on any machine. Don't remove
  this when adding new scripts; local-time behavior tests depend on it.
- **Style:** assert observable behavior (returned values, rendered content,
  store state, API requests at the boundary), not implementation details.
  Mock auth, toasts, and API modules at their module boundaries; mock `fetch`
  only when testing the centralized API client itself.
- **Config:** test configuration lives in `vitest.config.ts`, separate from
  `vite.config.ts` so the PWA plugin never loads during tests.

Component coverage is staged: after SearchBar, prioritize high-risk
forms/dialogs, grading and schedule interactions, hacker pages, then
auth/layout behavior.
