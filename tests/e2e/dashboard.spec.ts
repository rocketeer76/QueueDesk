import { expect, test } from "@playwright/test";
test("shows the QueueDesk dashboard", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Dashboard" })).toBeVisible();
  await expect(
    page.getByRole("button", { name: /Create ticket/i }),
  ).toBeVisible();
});
