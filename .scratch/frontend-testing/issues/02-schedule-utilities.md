# 02: Pure utility coverage: admin + hacker schedule utilities

**What to build:** Admins and hackers can rely on schedule behavior that is locked down by behavior-oriented tests. Admin-side date-range expansion includes every configured day of the hackathon window; time labels and quarter-hour boundaries render at the intended local time; drag selections produce the correct inclusive event range regardless of drag direction; overlapping events, midnight-spanning events, and invalid timestamps are handled according to product rules. Hacker-side events are laid out in non-overlapping lanes so overlaps remain readable. All assertions are reproducible under the fixed timezone.

**Blocked by:** 01: Foundation: Vitest + Testing Library setup with a smoke utility test

**Status:** ready-for-agent

- [ ] Date-range expansion covers every configured day inclusively
- [ ] Time labels and quarter-hour boundaries display correctly in local time
- [ ] Drag selections yield the same inclusive range regardless of direction
- [ ] Overlapping, midnight-spanning, and invalid-timestamp events follow product rules (table-driven where it improves clarity)
- [ ] Hacker schedule layout assigns overlapping events to non-overlapping lanes
- [ ] Reversed ranges and invalid dates covered as defensive branches
- [ ] Tests are pure (no React rendering) and pass deterministically in `America/Chicago`
