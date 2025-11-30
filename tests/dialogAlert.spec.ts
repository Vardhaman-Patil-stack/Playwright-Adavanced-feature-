import {test, expect, Locator} from "@playwright/test";

test("Simple dailog", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

page.on('dialog', async (dialog) => {
console.log('Dialog message:', dialog.message());
await dialog.accept(); // or dialog.dismiss();
}

})