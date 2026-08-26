# 05: Centralized API client coverage

**What to build:** Every portal page can trust the centralized request boundary. Tests mock `fetch` directly and assert, for every exported method across GET, POST, PUT, PATCH, and DELETE: the HTTP method, URL, credentials, headers, and serialized request body; that success envelopes map to typed data; that API error envelopes and fallback messages surface consistently; and that malformed JSON, network failures, and aborted requests are handled without uncaught errors.

**Blocked by:** 01: Foundation: Vitest + Testing Library setup with a smoke utility test

**Status:** ready-for-agent

- [ ] Every exported API-client method covered (GET/POST/PUT/PATCH/DELETE)
- [ ] Method, URL, credentials, headers, and body serialization asserted against mocked fetch
- [ ] Success envelopes map to typed data
- [ ] API error envelopes and fallback messages surfaced consistently
- [ ] Malformed JSON, network failures, and aborts handled without uncaught errors
- [ ] Module-level request sequencing reset between tests so no stale state leaks
