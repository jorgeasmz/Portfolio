import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Without globals enabled, Testing Library does not register its own teardown,
// so renders would accumulate across tests and queries would match twice.
afterEach(cleanup);
