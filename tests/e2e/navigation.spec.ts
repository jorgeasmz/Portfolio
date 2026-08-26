import { expect, test } from "@playwright/test";

test("the landing page leads with the quantum project", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Software Engineer"
  );

  const featured = page.locator("#projects").getByRole("heading", { level: 3 });
  await expect(featured.first()).toContainText("BB84");
});

test("every project is listed, with the quantum one first", async ({ page }) => {
  await page.goto("/projects");

  const titles = page.getByRole("heading", { level: 3 });
  await expect(titles).toHaveCount(5);
  await expect(titles.first()).toContainText("BB84");
});

test("a card opens its project page", async ({ page }) => {
  await page.goto("/projects");

  // The whole card is an overlay link, and that is what a visitor actually
  // clicks; the title link underneath it is there for keyboard and screen readers.
  await page.locator('a[href^="/projects/bb84-simulation"]').last().click();

  await expect(page).toHaveURL(/\/projects\/bb84-simulation/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("BB84");
});

test("an unknown project returns a 404 rather than an error", async ({ page }) => {
  const response = await page.goto("/projects/no-such-project");

  expect(response?.status()).toBe(404);
});
