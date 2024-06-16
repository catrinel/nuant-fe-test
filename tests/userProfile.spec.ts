import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/user");
});

test.describe("User profile", () => {
  test("should render navbar", async ({ page }) => {
    await expect(page.getByRole("navigation")).toBeVisible();
  });

  test("should have heading", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Bulbasaur's profile" })
    ).toBeVisible();
  });

  test("should render user info", async ({ page }) => {
    await expect(page.getByText("Hi, Bulbasaur!")).toHaveCount(2);

    await expect(page.getByAltText("Bulbasaur pokemon")).toHaveCount(2);
  });
});
