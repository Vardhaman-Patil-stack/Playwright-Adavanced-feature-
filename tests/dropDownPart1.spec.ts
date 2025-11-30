import {test, expect, Locator} from "@playwright/test";
test("DropDown Selection", async ({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator('#country').selectOption({label : 'India'})

await page.locator('#colors').selectOption(['Red', 'Green', 'Yellow']);

//You can check how many options are available in the dropdown

const dropdownOptions:Locator= page.locator('#country>option');
    await expect(dropdownOptions).toHaveCount(10);

const optionsText : string[]= (await dropdownOptions.allTextContents()).map(text =>text.trim());
expect(optionsText).toContain('Japan');



//4. Print All Dropdown Options

const printoptionsText=await page.locator('#country > option').allTextContents();
for(const text of printoptionsText) {
    console.log(text)
}

//5. Check for Duplicate Options
//Use a Set to detect if any options are repeated in the dropdown.

const optionsPresent = await page.locator('#colors > option').allTextContents();

const set=new Set();
const duplicates=[];

for(const item of optionsPresent){
if(set.has(item)){
    duplicates.push(item)
}else{
    set.add(item)
}
console.log("Duplicate items:", duplicates);


}

//Compare the original list with a sorted version.
const optionOriginal = await page.locator('#colors > option').allTextContents();
const original=[...optionOriginal];
const sorted=[...optionOriginal].sort();
expect(original).toEqual(sorted);






});