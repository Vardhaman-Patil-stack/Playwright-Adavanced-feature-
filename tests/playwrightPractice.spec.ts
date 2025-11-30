import { test, expect, Locator } from '@playwright/test'

/* test("demo qa navigation", async ({ page }) => {
    await page.goto("https://demoqa.com/")

    const link: Locator = page.getByRole('link', { name: 'Alerts, Frame & Windows' })
    await expect(link).toBeVisible()
    await link.click()

    const brlink: Locator = page.getByRole('link', { name: 'Browser Windows' })
    await expect(brlink).toBeVisible()
    await brlink.click()

    const wibutton: Locator = page.locator("#windowButton")
    await expect(wibutton).toBeVisible()
    await wibutton.click()
    const heading:Locator=page.getByRole('heading', { name: 'This is a sample page' })
    expect(heading).toHaveText("This is a sample page")





}) */


test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByRole('heading', { name: 'Alerts, Frame & Windows' }).click();
  await page.getByText('Browser Windows').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'New Window', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByRole('heading', { name: 'This is a sample page' }).click();
});