import {test, expect,Locator} from '@playwright/test'

test("Git practice command", async({page})=>{

 await page.goto("https://testautomationpractice.blogspot.com/")

const textlocator:Locator= page.locator('#name')

await expect(textlocator).toBeVisible();
await expect(textlocator).toBeEnabled();


})