# Frontend Testing Specification

## Problem Statement

The HARP portal frontend currently has no test runner, test scripts, or frontend test suite. This leaves hacker, admin, and super-admin workflows without the behavioral protection already provided by the Go backend tests. Important frontend logic includes dynamic application validation, local-time schedule handling, API response mapping, Zustand state transitions, and interactive controls that can regress without a fast local check.

## Solution

Establish a local frontend unit-testing foundation for `client/portal` using Vitest and Testing Library. Add focused tests for pure utilities, the centralized API client, Zustand stores, and one representative interactive component, then provide a staged path for broader component coverage. Tests should verify observable behavior and important failure paths while isolating APIs, authentication, toasts, and browser-only boundaries.

## User Stories

1. As a frontend developer, I want a standard test command for the portal, so that I can verify changes without starting the entire application.
2. As a frontend developer, I want a watch-mode test command, so that I can get rapid feedback while editing code.
3. As a frontend developer, I want an optional coverage command, so that I can see which behaviors still lack tests.
4. As a frontend developer, I want tests to run in the same Vite-oriented toolchain as the portal, so that test resolution and TypeScript behavior stay close to production.
5. As a frontend developer, I want shared test setup, so that common DOM cleanup and matcher registration are consistent across the suite.
6. As a frontend developer, I want tests co-located with the behavior they protect, so that the relevant tests are easy to discover and maintain.
7. As a frontend developer, I want semantic behavior assertions instead of routine snapshots, so that tests remain resilient to presentational refactors.
8. As a hacker, I want application field validation to enforce required and optional fields correctly, so that I receive useful feedback before submitting.
9. As a hacker, I want phone validation to enforce the supported US phone format, so that invalid contact information is caught locally.
10. As a hacker, I want numeric application constraints to enforce minimum and maximum values, so that my answers satisfy the configured schema.
11. As a hacker, I want select, multi-select, and checkbox validation to preserve their intended defaults and required behavior, so that I can complete the application reliably.
12. As an admin, I want schedule date ranges to include every configured day, so that schedule editing covers the complete hackathon window.
13. As an admin, I want schedule time labels and quarter-hour boundaries to display correctly, so that events are created at the intended local time.
14. As an admin, I want drag selections to produce the correct inclusive event range regardless of drag direction, so that schedule creation is predictable.
15. As an admin, I want schedule events that overlap, span midnight, or contain invalid timestamps to be handled according to product rules, so that the schedule remains usable under imperfect data.
16. As a hacker, I want schedule events to be laid out in non-overlapping lanes, so that overlapping events remain readable.
17. As a super admin, I want notification URLs to accept valid same-origin paths and URLs, so that links open within the portal.
18. As a super admin, I want unsafe, malformed, cross-origin, protocol-relative, and backslash-containing notification URLs rejected, so that notifications cannot direct users outside the portal unexpectedly.
19. As a super admin, I want notification times to enforce the minimum future window, so that scheduled notifications are not created too late.
20. As an admin, I want user names, initials, roles, and dates formatted consistently, so that user-management views are easy to scan.
21. As a portal user, I want API helpers to send the correct HTTP method, credentials, headers, body, and abort signal, so that requests honor the portal API contract.
22. As a portal user, I want successful API envelopes mapped to typed data, so that pages receive the expected payload.
23. As a portal user, I want API error envelopes and fallback messages surfaced consistently, so that failures are understandable.
24. As a portal user, I want network failures, malformed JSON, and aborted requests handled without uncaught errors, so that transient conditions do not break the UI.
25. As an admin, I want application-list filters, sorting, cursors, loading states, and statistics to transition correctly, so that applicant review remains reliable.
26. As an admin, I want pending and completed review tabs to fetch the correct data, so that I see the review queue I selected.
27. As an admin, I want successful review votes to remove the reviewed item from the pending list, so that the queue reflects completed work.
28. As an admin, I want grading detail and reviewer-note loading to ignore stale responses after rapid navigation, so that one applicant's data cannot appear under another applicant.
29. As an admin, I want grading navigation to stop at the first and last review, so that keyboard and button navigation cannot leave the valid queue.
30. As an admin, I want grading vote failures to preserve the review and clear submitting state, so that I can retry a failed action.
31. As an admin, I want sponsor creation, editing, deletion, and logo upload state to update correctly, so that public sponsor data remains manageable.
32. As a super admin, I want scheduled notification creation, update, deletion, and generation state to update correctly, so that notification administration reflects server results.
33. As a super admin, I want notification conflicts to refresh the current list, so that stale edits do not silently overwrite newer data.
34. As a super admin, I want application-schema field and section operations to preserve ordering and validation rules, so that the hacker application remains configurable.
35. As a super admin, I want user search, role filters, review-assignment toggles, and role updates to produce correct state and API parameters, so that user administration is dependable.
36. As a portal developer, I want a representative interactive component test for SearchBar, so that the project proves its DOM testing conventions for open, input, blur, and Escape behavior.
37. As a portal developer, I want authentication, toast, and browser APIs mocked at their module boundaries, so that unit tests remain deterministic and do not require real sessions or network services.
38. As a portal maintainer, I want the initial suite to run in a fixed `America/Chicago` timezone, so that local-time schedule assertions are reproducible.
39. As a portal maintainer, I want local testing instructions beside the portal commands, so that contributors know how to run tests, watch mode, coverage, and locate test files.

## Implementation Decisions

- Use Vitest as the test runner because the portal is built with Vite and already has TypeScript/Vite module resolution.
- Use a `jsdom` environment for DOM tests.
- Use Testing Library for React rendering and semantic queries, with DOM matchers and user-event helpers for interaction tests.
- Add local portal scripts for normal tests, watch mode, and coverage. Do not modify CI in this phase.
- Keep tests co-located with the source modules they exercise. Add a small shared test setup area for global matcher registration, cleanup, and focused helpers.
- Force the test process to use `America/Chicago` so date and schedule behavior is deterministic.
- Prefer existing seams and avoid production refactors solely to make code testable. Test pure exported utilities directly, API wrappers through the centralized request boundary, Zustand stores through their public state/actions, and components through rendered user-visible behavior.
- Mock API modules, SuperTokens, and Sonner at module boundaries. Mock `fetch` directly only when testing the centralized API client itself.
- Reset Zustand stores between tests and handle module-level request sequencing where needed so tests cannot leak state or stale-request counters.
- Cover the six agreed utility areas: admin schedule utilities, hacker schedule utilities, super-admin notification utilities, super-admin user-management utilities, shared date/time helpers, and dynamic application schema utilities.
- Cover every exported method of the centralized API client across GET, POST, PUT, PATCH, and DELETE, including success data, API errors, fallback errors, malformed JSON, network failures, and aborts.
- Add tests for all agreed store areas: applicant-list store, review store, grading store, sponsor store, notification store, application-schema store, and user-management store. Shared stores used by these behaviors should be included where their public actions are part of the tested contract.
- Start component coverage with SearchBar. Later component coverage should be staged around high-risk forms/dialogs, grading and schedule interactions, hacker pages, and auth/layout behavior.
- Use behavior-oriented test names and assertions. Avoid routine snapshots and assertions against implementation details such as private state variables or CSS classes unless a class is the externally relevant contract.
- Add concise portal README guidance covering normal tests, watch mode, coverage, test placement, and timezone determinism.
- Do not add database migrations, backend changes, API contract changes, authentication integration, or browser end-to-end infrastructure in this phase.

## Testing Decisions

- A good test verifies external behavior: returned values, API requests at the boundary, state exposed by store actions, rendered content, enabled/disabled controls, navigation callbacks, and user-visible error handling.
- Tests should cover both successful behavior and meaningful defensive branches, including invalid dates, reversed ranges, malformed URLs, minimum scheduling windows, empty values, spanning-midnight events, overlapping events, API failures, aborts, stale responses, and mutation failures.
- Pure utility tests should be table-driven where that improves clarity and should not require React rendering.
- API-client tests should assert method, URL, credentials, headers, serialized request body, response-envelope mapping, and error behavior using a mocked `fetch`.
- Store tests should mock page API modules, reset store state per test, invoke public actions, and assert resulting state and returned success values. Toast calls may be asserted where they represent meaningful user-visible behavior.
- Component tests should use focused providers only where required, semantic queries, and user-event interactions. They should not mount the entire application tree by default.
- The initial component test is SearchBar and must cover opening the search control, propagating typed values, closing on blur when empty, preserving the open state when populated, and clearing/closing on Escape.
- Existing backend prior art is the Go handler/store test style: explicit success and failure cases, mocked external dependencies, and assertions against observable outcomes. The frontend adapts that discipline to Vitest, Testing Library, API modules, and Zustand rather than copying Go file organization.
- Validation includes the portal test command plus the existing portal build, lint, and formatting checks. CI remains unchanged by decision.

## Out of Scope

- Running frontend tests against a live backend, database, SuperTokens instance, or SendGrid account.
- Full browser end-to-end workflows, visual regression testing, Playwright setup, and mobile-device testing.
- Enforcing a coverage percentage threshold during the initial rollout.
- Changing backend tests or backend implementation.
- Changing API contracts, routes, authentication behavior, or production application logic unless a minimal testability change is proven necessary.
- Testing every page and every shadcn/Radix primitive in the first implementation slice.
- Adding CI enforcement or making frontend tests a required GitHub Actions check in this phase.
- Replacing the existing Vite, React, Zustand, React Hook Form, Zod, or shadcn architecture.

## Further Notes

- The portal currently has build, lint, and formatting scripts but no frontend test script or test framework.
- The implementation should update the npm lockfile through the existing npm workflow.
- The agreed rollout is local-first: establish the foundation, add the utility/API/store/component coverage, document it, and leave CI unchanged until the suite has a useful baseline.
- GitHub publication was attempted but was unavailable because Issues are disabled for the repository. The intended triage label was `ready-for-agent`.
