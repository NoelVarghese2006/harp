# 07: Zustand store coverage: grading store

**What to build:** Grading is resilient under real usage. Loading grading detail and reviewer notes ignores stale responses after rapid navigation so one applicant's data can never appear under another applicant. Navigation stops at the first and last review so keyboard/button navigation cannot leave the valid queue. A failed vote preserves the review and clears submitting state so the admin can retry.

**Blocked by:** 05: Centralized API client coverage

**Status:** ready-for-agent

- [ ] Stale responses ignored after rapid navigation (no cross-applicant data leakage)
- [ ] Navigation bounded at first and last review in both directions
- [ ] Failed vote preserves the review under evaluation and clears submitting state
- [ ] Store state reset between tests; assertions against public state/actions only
