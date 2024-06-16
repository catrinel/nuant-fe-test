import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

test.describe("Details view", () => {
  test("should render all pokemon info", async ({ page }) => {
    await expect(page.getByText("ivysaur")).toBeVisible();

    page.getByText("ivysaur").click();

    await expect(page.getByText("Ivysaur's Pokemon Information")).toBeVisible();

    await expect(page.getByText("Name")).toBeVisible();

    await expect(page.getByText("Height")).toBeVisible();
    await expect(page.getByText("10")).toBeVisible();

    await expect(page.getByText("Weight")).toBeVisible();
    await expect(page.getByText("130")).toBeVisible();

    await expect(page.getByText("Types")).toBeVisible();
    await expect(page.getByText("grass, poison")).toBeVisible();
  });
});
