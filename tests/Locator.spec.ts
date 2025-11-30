/*

Locator - Identifies the element on the page.
DOM - Document Object Model
DOM  is an API Interface provided by browser.

1) page.getByAltText() to locate an element, usually image, by its text alternative.
2) page.getByText() to locate by text content.(Non interactive elements)
3) page.getByRole() to locate by explicit and implicit accessibility attributes.
4) page.getByLabel() to locate a form control by associated label's text.
5) page.getByPlaceholder() to locate an input by placeholder.

6) page.getByTitle() to locate an element by its title attribute.
7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

*/
import {test, expect,Locator} from "@playwright/test"

test("Verify playwright locators", async ({page})=>{

   await page.goto("https://demo.nopcommerce.com/");
// //1) page.getByAltText()
// const logo:Locator=page.getByAltText("logo image");
//  await expect(logo).toBeVisible();
 
// const text:Locator= page.getByText("Welcome to our store");
// expect(text).toBeVisible();

// const partialText : Locator=page.getByText("Welcome to"); //substring
// expect(partialText).toBeVisible();

//2) page.getByText()
const regexText : Locator=page.getByText(/Welcome\s+To\s+Our\s+Store/i); //regular expression
await expect(regexText).toBeVisible();

//3) page.getByRole()

await page.getByRole("link",{name:'Log in'}).click();


await expect(page.getByRole("heading",{name:'Welcome, Please Sign In!'})).toBeVisible();

await expect(page.getByText("New Customer")).toBeVisible();

//4) page.getByLabel()
await page.getByLabel("Email:").fill("patil@gmail.com")
await page.getByLabel("Password:").fill("admin123")
await page.getByRole("button",{name:"LOG IN"}).click();


//5.getByPlaceholder()











})









 

