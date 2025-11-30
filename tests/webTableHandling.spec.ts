import{test,expect, Locator} from '@playwright/test'
test("static web table", async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/")
//1.Locating the Table:
const table=page.locator("table[name='BookTable']>tbody")

//2.Counting Rows:
const rowCount:Locator=table.locator("tr")
const allDta:Locator[]=await rowCount.all()

console.log("row count:",allDta) 
expect(rowCount).toHaveCount(7);

const row:number=await rowCount.count()
console.log("Number of rows", row)
expect(row).toBe(7)

//3Counting Columns (Headers):
const column:Locator=table.locator("tr>th")
const coulmnCount:number=await column.count()
console.log("Number of column",coulmnCount )
expect(coulmnCount).toBe(4)

// 4) Read all data from 2nd row (index 2 means 3rd row including header)
const secondRowData:Locator=rowCount.nth(2).locator("td")
const rowData:string[]=await secondRowData.allInnerTexts()

for(let text of rowData){
    console.log("Second row data:", text)

}
expect(secondRowData).toHaveText(['Learn Java', 'Mukesh', 'Java', '500'])
console.log("printing 2nd row data......")

//// 4) Read all data from the table (excluding header)
console.log('Printing all Table Data.......');

const allrowData:Locator[]=await rowCount.all() //get all row locators   //all() returns array of locators
console.log("BookName   Author  subject   price");

for(let row of allrowData.slice(1)){

   const cols= await row.locator("td").allInnerTexts()
   console.log(cols.join('\t'))
}









})