# Domain Documentation

This repository uses a single-context documentation layout:

- `CONTEXT.md` at the repository root contains domain and product context.
- `docs/adr/` contains architecture decision records.

When working on a task, read the root `CONTEXT.md` when it exists. Read ADRs relevant to the affected area from `docs/adr/`. If either location is absent, continue using the repository's existing guidance and code as the source of truth.

Keep domain context focused on stable concepts and constraints. Record significant architectural decisions as ADRs rather than embedding them in agent instructions.
