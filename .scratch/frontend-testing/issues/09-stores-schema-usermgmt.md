# 09: Zustand store coverage: application-schema + user-management stores

**What to build:** Portal configuration and administration remain dependable. Application-schema field and section operations preserve ordering and validation rules so the hacker application stays configurable. User search, role filters, review-assignment toggles, and role updates produce correct state and correct API parameters so user administration behaves as expected. Shared stores used by these behaviors are included where their public actions are part of the tested contract.

**Blocked by:** 05: Centralized API client coverage

**Status:** ready-for-agent

- [ ] Field and section operations preserve ordering and validation rules
- [ ] User search, role filters, review-assignment toggles, and role updates produce correct state
- [ ] Correct API parameters asserted at the mocked API-module boundary
- [ ] Shared stores covered where their public actions are part of the tested contract
