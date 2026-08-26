# 03: Pure utility coverage: super-admin notification + user-management utilities

**What to build:** Super admins can trust notification targeting and user-management presentation. Notification URLs accept valid same-origin paths and full URLs while rejecting unsafe, malformed, cross-origin, protocol-relative, and backslash-containing values, so notifications can't send users outside the portal. Notification times enforce the minimum future window. User names, initials, roles, and dates are formatted consistently across user-management views.

**Blocked by:** 01: Foundation: Vitest + Testing Library setup with a smoke utility test

**Status:** ready-for-agent

- [ ] Valid same-origin paths and URLs accepted
- [ ] Unsafe, malformed, cross-origin, protocol-relative, and backslash-containing URLs rejected (table-driven)
- [ ] Notification times enforce the minimum future scheduling window
- [ ] Name, initials, role, and date formatting consistent, including empty/edge inputs
- [ ] Tests are pure (no React rendering)
