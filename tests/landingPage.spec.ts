import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Landing page", () => {
  test("should have title", async ({ page }) => {
    await expect(page).toHaveTitle(/Pokedex/);
  });

  test("should render navbar", async ({ page }) => {
    await expect(page.getByText("Hi, Bulbasaur!")).toBeVisible();

    await expect(page.getByAltText("Bulbasaur pokemon")).toBeVisible();
  });

  test("should have heading", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Pokedex" })).toBeVisible();
  });

  test("should render searchbox", async ({ page }) => {
    await expect(page.getByLabel("Search pokemons by name")).toBeVisible();
    await expect(page.getByPlaceholder("bulbasaur")).toBeVisible();
  });

  test("should render filter dropdown", async ({ page }) => {
    await expect(page.getByLabel("Filter by type")).toBeVisible();
  });
});
