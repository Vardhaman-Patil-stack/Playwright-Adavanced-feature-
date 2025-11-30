import {test, expect} from "@playwright/test";
/*
test("title", ()=>{

step1
step2
step3



});
*/

test("Verify page titel", async({page}) =>{
await page.goto("https://demo.nopcommerce.com/");
let title:string =  await page.title();
console.log("Title:",title);
await  expect(page).toHaveTitle("nopCommerce demo store. Home page title");
})

test("Verify page URL", async({page}) =>{
await page.goto("https://demo.nopcommerce.com/");
let url:string=await page.url();
await expect(page).toHaveURL(/nopcommerce/);
console.log("URL",url);
});




