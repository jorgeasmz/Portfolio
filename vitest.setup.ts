import "@testing-library/jest-dom/vitest";

import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Testing Library only registers its own teardown when globals are enabled.
afterEach(cleanup);
