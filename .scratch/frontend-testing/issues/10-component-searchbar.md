# 10: First component test: SearchBar conventions

**What to build:** The project proves its DOM testing conventions with one representative interactive component test. SearchBar opens its search control, propagates typed values, closes on blur when empty, stays open when populated, and clears/closes on Escape — using semantic queries and user-event interactions with authentication and toast libraries mocked at module boundaries. This establishes the pattern for staged future component coverage (high-risk forms/dialogs, grading and schedule interactions, hacker pages, auth/layout).

**Blocked by:** 01: Foundation: Vitest + Testing Library setup with a smoke utility test

**Status:** ready-for-agent

- [ ] Opening the search control works via user interaction
- [ ] Typed values propagate to the component's observable behavior
- [ ] Closes on blur when empty; remains open when populated
- [ ] Escape clears and closes the control
- [ ] SuperTokens/Sonner (and other external boundaries) mocked at module level
- [ ] Semantic Testing Library queries and user-event helpers used; no full app tree mounted; no snapshots or implementation-detail assertions
