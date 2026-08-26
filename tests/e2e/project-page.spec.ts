import { expect, test } from "@playwright/test";

test.describe("project detail", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects/credit-risk");
  });

  test("renders the heading, summary and stack", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Credit Risk"
    );
    await expect(page.getByText("scikit-learn").first()).toBeVisible();
  });

  test("renders MDX tables as tables", async ({ page }) => {
    // Guards the remark-gfm plugin: without it the markdown renders as text.
    const table = page.locator("article table").first();

    await expect(table).toBeVisible();
    await expect(table.getByRole("cell", { name: /Logistic Regression/ })).toBeVisible();
  });

  test("opens external links in a new tab without leaking the referrer", async ({
    page,
  }) => {
    const repo = page.getByRole("link", { name: /View Code/ });

    await expect(repo).toHaveAttribute("target", "_blank");
    await expect(repo).toHaveAttribute("rel", "noreferrer");
  });

  test("keeps a single top-level heading on the page", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  });
});
