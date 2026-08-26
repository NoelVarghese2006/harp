# 08: Zustand store coverage: sponsor + notification stores

**What to build:** Public sponsor data and notification administration stay accurate. The sponsor store updates correctly through creation, editing, deletion, and logo upload state. The notification store reflects server results for creation, update, deletion, and generation state, and notification conflicts refresh the current list so stale edits never silently overwrite newer data.

**Blocked by:** 05: Centralized API client coverage

**Status:** ready-for-agent

- [ ] Sponsor create, edit, delete, and logo-upload state update correctly
- [ ] Notification create, update, delete, and generation state reflect server results
- [ ] Conflict handling refreshes the current list instead of overwriting newer data
- [ ] Page APIs mocked at module boundaries; stores reset per test
