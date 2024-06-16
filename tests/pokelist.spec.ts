import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Poke List", () => {
  test("should render all pokemons when no filters are selected", async ({
    page,
  }) => {
    await expect(page.getByText("bulbasaur")).toBeVisible();
    await expect(page.getByText("ivysaur")).toBeVisible();
  });

  test("should render filtered items on search value change", async ({
    page,
  }) => {
    await expect(page.getByText("ivysaur")).toBeVisible();

    page.getByPlaceholder("bulbasaur").fill("Pikachu");

    await expect(page.getByText("ivysaur")).not.toBeVisible();
    await expect(page.getByText("pikachu")).toBeVisible();
  });

  test("should render filtered items on type filter change", async ({
    page,
  }) => {
    await expect(page.getByText("ivysaur")).toBeVisible();

    page.getByTestId("dropdown").click();

    await expect(page.getByText("ice")).toBeVisible();

    page.getByText("ice").click();

    await expect(page.getByText("ivysaur")).not.toBeVisible();
    await expect(page.getByText("dewgong")).toBeVisible();
    await expect(page.getByText("jynx")).toBeVisible();
    await expect(page.getByText("articuno")).toBeVisible();
  });
});
