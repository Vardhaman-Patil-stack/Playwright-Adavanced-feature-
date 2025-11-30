import{test, expect, Locator} from "@playwright/test"

test("Verify Naveen Automation lab registration form", async ({page}) =>{
await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

const image:Locator=page.getByAltText("naveenopencart");
console.log(await image.count());
await expect(image).toBeVisible();

//await page.getByText("Register Account", {exact:true});
await expect(page.getByText("Register Account", {exact:true})).toBeVisible();

await page.getByLabel('First Name').fill("TestFirstName");
await page.getByLabel('Last Name').fill("TestLastName");
await page.getByPlaceholder('E-Mail').fill("Crossworld@gmail.com");
await page.getByRole('heading', {name:'Telephone'}).fill("1234567890");
page.

})