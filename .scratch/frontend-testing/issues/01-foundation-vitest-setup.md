# 01: Foundation: Vitest + Testing Library setup with a smoke utility test

**What to build:** A frontend developer can run a single command from the portal and see the first test pass, without starting the whole application. This establishes the local unit-testing foundation: Vitest with the jsdom environment, Testing Library matchers and cleanup registered through shared setup, watch-mode and coverage commands, and a deterministic `America/Chicago` timezone so date-dependent tests are reproducible. One co-located pure-utility test proves the entire pipeline works end-to-end, and README guidance explains how to run tests, watch mode, coverage, where tests live, and why the timezone is pinned.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [ ] Running the normal test command executes the portal suite in a jsdom environment and exits green
- [ ] Watch mode re-runs affected tests on file changes
- [ ] Coverage command produces a report without enforcing any threshold
- [ ] Shared test setup performs DOM cleanup after every test and registers DOM matchers
- [ ] The test process runs in `America/Chicago` regardless of host machine timezone
- [ ] At least one co-located pure-utility test passes as a pipeline smoke check
- [ ] Tests co-located next to the modules they exercise; shared helpers live in a small dedicated setup area
- [ ] Portal README documents test, watch, coverage commands, test placement, and timezone determinism
- [ ] Existing build, lint, and format checks still pass; npm lockfile updated via the existing npm workflow; CI unchanged
