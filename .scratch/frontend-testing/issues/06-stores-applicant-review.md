# 06: Zustand store coverage: applicant-list + review stores

**What to build:** Admin applicant review is dependable. The applicant-list store transitions correctly through filters, sorting, cursors, loading states, and statistics. The review store fetches the right data for pending vs. completed review tabs, and a successful review vote removes the reviewed item from the pending list so the queue reflects completed work. Page API modules are mocked at their boundaries and store state resets per test.

**Blocked by:** 05: Centralized API client coverage

**Status:** ready-for-agent

- [ ] Applicant-list filters, sorting, cursors, loading states, and statistics transition correctly
- [ ] Pending and completed review tabs fetch the correct data
- [ ] Successful votes remove reviewed items from the pending list
- [ ] Store state reset between tests; public actions invoked; resulting state and returned success values asserted
- [ ] Toast calls asserted only where they represent user-visible behavior
