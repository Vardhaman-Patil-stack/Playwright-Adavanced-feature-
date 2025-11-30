import {test, expect, Locator} from "@playwright/test";
import { text } from "stream/consumers";

test.only("Key Action Menthods", async ({page}) =>{
 await page.goto("https://testautomationpractice.blogspot.com/")

const textlocator:Locator= page.locator('#name')

await expect(textlocator).toBeVisible();
await expect(textlocator).toBeEnabled();


const attValue : string | null  =await textlocator.getAttribute('maxlength')
const attvaluestr = attValue ? Number(attValue) : null;
expect(attValue).toBe('15');

await textlocator.fill("Hello World");

const textcontent :string | null = await textlocator.textContent() ;
console.log("Text Content of Text Box :", textcontent); // returns empty
 
const inputvalue :string | null= await textlocator.inputValue() ;
console.log("Input Value of Text Box :",inputvalue );
expect(inputvalue).toBe("Hello World");
//await page.waitForTimeout(3000);

})

test("Radio Button Actions", async ({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/")

const radiocheck :Locator =page.locator('#male')
await expect(radiocheck).toBeVisible();
await expect(radiocheck).toBeEnabled();
expect (await (radiocheck).isChecked()).toBe(false);

await radiocheck.check();
expect (await (radiocheck).isChecked()).toBe(true);
await expect(radiocheck).toBeChecked();

}) 

test("Checkbox Button Actions", async ({page}) =>{


// 1. Select specific checkbox (Sunday) using getByLabel and assert
await page.goto("https://testautomationpractice.blogspot.com/")
const checkbox : Locator=page.getByLabel('Sunday')
await expect(checkbox).toBeVisible();
   await  checkbox.check();
   await expect(checkbox).toBeChecked();


   function getCheckbox(day :string):Locator{
    return page.getByLabel(day)
   }

  const days : string[]= ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const checkboxes:Locator[]=days.map(getCheckbox);
expect(checkboxes.length).toBe(6);

  //or
  const checkboxesAlt: Locator[]=[];

  for (const day of days){
    const checkboxLocator= page.getByLabel(day);
    checkboxesAlt.push(checkboxLocator);
  }

  // 3. Select all checkboxes and assert each is checked
  for 
    (const checkbox of checkboxesAlt){
await checkbox.check()
 expect(checkbox).toBeChecked();
    }

    await page.waitForTimeout(2000);


    // 4. Uncheck last 3 checkboxes and assert

for(const checkbox of checkboxesAlt.slice(3)){
  await checkbox.uncheck();
  expect(checkbox).not.toBeChecked();
}

await page.waitForTimeout(3000);

//5.    Toggle checkboxes: If checked, uncheck; if unchecked, check. Assert state flipped.

for (const checkbox of checkboxesAlt){
    if(await checkbox.isChecked()){
      await checkbox.uncheck();
      await expect(checkbox).not.toBeChecked();
    }
    else{
        await checkbox.check();
       await  expect(checkbox).toBeChecked();
    }

    //Toggle checkboxes: If checked, uncheck; if unchecked, check. Assert state flipped. using torney operator

    const isChecked = await checkbox.isChecked();
    isChecked ? await checkbox.uncheck() : await checkbox.check();

    if(isChecked){
        await expect(checkbox).not.toBeChecked();
    } else {
        await expect(checkbox).toBeChecked();
    }


    // 6. Randomely select check boxes - Select checkboxes by index (1, 3, 6) and assert

    const indexes:number[]=[1,3,6];

    for(const i of indexes)
    {
        await checkboxesAlt[i].check();
        await expect(checkboxesAlt[i]).toBeChecked();

    }
    await page.waitForTimeout(5000);
 

//7. Select the check box based on the Label
const weekname:string="Friday";

for(const label of days)
{
    if(label.toLowerCase()===weekname.toLowerCase())
    {
        const checkbox=page.getByLabel(label);
        checkbox.check();
        await expect(checkbox).toBeChecked();
    }
}
await page.waitForTimeout(5000);




  












}})
