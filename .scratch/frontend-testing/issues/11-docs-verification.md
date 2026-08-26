# 11: Documentation polish & suite verification

**What to build:** Contributors have complete, accurate local testing instructions beside the portal commands: how to run tests, watch mode, and coverage; where tests live; why the timezone is pinned; and the staged roadmap for future component coverage. The full initial suite runs green alongside the existing portal build, lint, and formatting checks, with CI unchanged.

**Blocked by:** 02: Pure utility coverage: admin + hacker schedule utilities; 03: Pure utility coverage: super-admin notification + user-management utilities; 04: Pure utility coverage: shared date/time helpers + dynamic application schema validation; 05: Centralized API client coverage; 06: Zustand store coverage: applicant-list + review stores; 07: Zustand store coverage: grading store; 08: Zustand store coverage: sponsor + notification stores; 09: Zustand store coverage: application-schema + user-management stores; 10: First component test: SearchBar conventions

**Status:** ready-for-agent

- [ ] Portal README covers normal tests, watch mode, coverage, test placement, timezone determinism
- [ ] Staged roadmap for future component coverage documented
- [ ] Full suite green via test command
- [ ] Existing build, lint, and format checks still pass
- [ ] No CI changes; no backend/API/contract changes introduced
