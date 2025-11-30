import{test,expect } from '@playwright/test'


test("Simple Dialog:", async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

//Register a dialog
page.on('dialog', (dialog)=>{
console.log("Dailog type is", dialog.type())
expect(dialog.type()).toContain('alert')
console.log("Dailog Text:", dialog.message())
expect(dialog.message()).toContain("I am an alert box!")
dialog.accept()

})
await page.locator("#alertBtn").click()
await page.waitForTimeout(5000)


})

test("Confimartion Dialog:", async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/');

page.on('dialog', (dialog)=>{

  console.log("dailog confi type",dialog.type())
  expect(dialog.type()).toContain('confirm'); 
  console.log("Dialog Text:",dialog.message());
  expect(dialog.message()).toContain("Press a button!");
  dialog.accept(); // close dialog by accepting
        //dialog.dismiss(); // close dialog by dimissing

})


})