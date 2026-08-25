// Shared test setup: runs before every test file.
// - Registers Testing Library's jest-dom matchers (toBeInTheDocument, etc.)
// - Cleans up the DOM between tests so rendered components never leak
import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
