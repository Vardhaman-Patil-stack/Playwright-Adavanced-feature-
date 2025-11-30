import { test, expect, Locator } from "@playwright/test"

test("Autosuggest dropdown", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");

    await page.locator("input[name='q']").fill("smart")
    await page.waitForTimeout(3000)

    // Get all the suggested options --> Ctrl+Shift+P  on DOM -->emulate focused page
    const getLocator: Locator = page.locator("ul>li");
    
    const locatorCount = await getLocator.count();
    expect(locatorCount).toBe(8)
    // printing all the suggested options in the console
    console.log("5 th option:", await getLocator.nth(5).innerText())

    console.log("Printing all the auto suggestions.....")
    const options: string[] = (await getLocator.allInnerTexts()).map(test => test.trim())

    console.log(options);

    for (let i = 0; i < locatorCount; i++) {
        console.log(await getLocator.nth(i).innerText())
        // console.log(await getLocator.textContent())
        

    }

    //select/click on the smartphone option
    for (let i = 0; i < locatorCount; i++) {
        const text=await getLocator.nth(i).innerText()
        // console.log(await getLocator.textContent())
        if(text==='smartphone'){
getLocator.nth(i).click()
break;

        }

    }

    await page.waitForTimeout(3000);








})