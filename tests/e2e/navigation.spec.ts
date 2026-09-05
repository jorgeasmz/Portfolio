import { readdirSync } from "node:fs";

import { expect, test } from "@playwright/test";

// Counted from the content directory so a new entry does not need this file edited.
const PROJECT_COUNT = readdirSync("content/projects").filter((file) =>
  file.endsWith(".mdx")
).length;

test("the landing page leads with the platform project", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Software Engineer"
  );

  const featured = page.locator("#projects").getByRole("heading", { level: 3 });
  await expect(featured.first()).toContainText("ML Platform");
});

test("every project is listed, with the platform one first", async ({ page }) => {
  await page.goto("/projects");

  const titles = page.getByRole("heading", { level: 3 });
  await expect(titles).toHaveCount(PROJECT_COUNT);
  await expect(titles.first()).toContainText("ML Platform");
});

test("a card opens its project page", async ({ page }) => {
  await page.goto("/projects");

  // The overlay link covers the card and is what a visitor actually clicks.
  await page.locator('a[href^="/projects/bb84-simulation"]').last().click();

  await expect(page).toHaveURL(/\/projects\/bb84-simulation/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("BB84");
});

test("an unknown project returns a 404 rather than an error", async ({ page }) => {
  const response = await page.goto("/projects/no-such-project");

  expect(response?.status()).toBe(404);
});
