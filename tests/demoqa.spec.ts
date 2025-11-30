import { test, expect, Locator } from "@playwright/test"

test("Registration form ", async ({ page }) => {

    await page.goto("https://app.playonereal.com/agent-signup");

  await page.getByLabel("First Name").fill("Naveen");
  await page.getByLabel("Last Name").fill("Patil");
  await page.getByLabel("Username").fill("vardhamanpatil");
  await page.locator("[name='emailAddress']").fill("vardhamanpatil@gmail.com");
  await page.locator("[name='password']").fill("Vardhu@#123rtyi");
  await page.locator("[name='confirmPassword']").fill("Vardhu@#123rtyi");

  const checkboxes = page.getByRole("checkbox");
  await checkboxes.nth(0).check();
  await checkboxes.nth(1).check();

  await page.getByRole("button", { name: "Create Account" }).click();

  await expect(page).toHaveURL("https://app.playonereal.com/agent-signup");

})
