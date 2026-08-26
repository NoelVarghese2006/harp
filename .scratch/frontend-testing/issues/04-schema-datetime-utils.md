# 04: Pure utility coverage: shared date/time helpers + dynamic application schema validation

**What to build:** Hackers get useful pre-submit feedback because application field validation is fully protected by table-driven tests. Required and optional fields enforce correctly, phone validation enforces the supported US format, numeric fields respect configured minimum and maximum values, and select, multi-select, and checkbox fields preserve their intended defaults and required behavior. Shared date/time helpers used across roles are also covered.

**Blocked by:** 01: Foundation: Vitest + Testing Library setup with a smoke utility test

**Status:** ready-for-agent

- [ ] Required and optional application fields validate correctly before submission
- [ ] Phone validation enforces the supported US phone format, rejecting invalid contact info
- [ ] Numeric constraints enforce configured min/max bounds
- [ ] Select, multi-select, and checkbox validation preserves defaults and required semantics
- [ ] Shared date/time helper behaviors covered
- [ ] Table-driven style used where it improves clarity; no React rendering required
