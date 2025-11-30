import{test, expect, Locator} from "@playwright/test"

test('map concept practice', async({page})=>{

    const number =[1,3, 5, 6]
    const square = number.map(num =>num*num)
    console.log(square)

    const fruits=['bannana', 'apple', 'pinapile']
    const toupper=fruits.map(upper =>upper.toUpperCase())
console.log(toupper)

const fruit=['bannana', 'apple', 'pinapile','mango']

 function toUpper(frt:string):string{
    return frt.toUpperCase()

} 
const upperfruits:string[]=fruit.map(toUpper)
console.log(upperfruits)

} )

test('validate sort method', async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
const sortAni=page.locator('#animals>option')
const optionText:string[]=(await sortAni.allTextContents()).map(text=>text.trim());

const originalText:string[]=[...optionText]
const sortedText:string[]=[...optionText].sort()
console.log(sortedText)
expect(originalText).toEqual(sortedText);
})

test.only("Validate innerText, TextContent, AllinnerText, allTextContent, all", async({page})=>{
//allTextContent

    await page.goto('https://www.flipkart.com/')
    const OptionsElement:Locator= page.locator("div[class='YBLJE4']>span")
    /* const options:string[]=(await OptionsElement.allTextContents()).map(text=>text.trim());
    console.log(options)
//output
 /*    [
  'Minutes',
  'Mobiles & Tablets',
  'Fashion',
  'Electronics',
  'Home & Furniture',
  'TVs & Appliances',
  'Flight Bookings',
  'Beauty, Food..',
  'Grocery'
] */

//allInnerText

// const visbileText:string[]=await OptionsElement.allInnerTexts();
// console.log(visbileText)

//OutPut
/* [
  'Minutes',
  'Mobiles & Tablets',
  'Fashion',
  'Electronics',
  'Home & Furniture',
  'TVs & Appliances',
  'Flight Bookings',
  'Beauty, Food..',
  'Grocery'
] */

  //page.waitForTimeout(3000)
  //InnerText */
  const elementText=await OptionsElement.nth(3).innerText();
console.log(elementText)

//But innerText() (and also textContent(), click(), etc.) can only act on ONE element 
// when Playwright runs in strict mode (which is enabled by default).
//So Playwright doesn’t know which of the 9 elements you want, and it throws an error instead of guessing.

//TextContent

const visbleTextContent:string | null=await OptionsElement.nth(8).textContent();
console.log(visbleTextContent)

const allLocator:Locator[]=await OptionsElement.all()
for(const eachLocator of allLocator){
    const textvalue=(await eachLocator.innerText()).trim()
if(textvalue==="Mobiles & Tablets"){
await  eachLocator.click();
//console.log(`Clicked on: ${textvalue}`)
expect(page.locator("h1")).toHaveText("Mobile Phones")
break;
}
}
  






    






})






