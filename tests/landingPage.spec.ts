import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Landing page", () => {
  test("should have title", async ({ page }) => {
    await expect(page).toHaveTitle(/Pokedex/);
  });

  test("should render navbar", async ({ page }) => {
    await expect(page.getByRole("navigation")).toBeVisible();

    await expect(page.getByText("Hi, Bulbasaur!")).toBeVisible();

    await expect(page.getByAltText("Bulbasaur pokemon")).toBeVisible();
  });

  test("should have heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Pokedex" })).toBeVisible();
  });
});
