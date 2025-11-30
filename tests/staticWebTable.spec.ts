import{test, expect,Locator} from '@playwright/test' 

test("static web table", async({page}) =>{
await page.goto("https://testautomationpractice.blogspot.com/")

const bookTable:Locator=page.locator("table[name='BookTable'] tbody");
await expect(bookTable).toBeVisible();

//1) count number of rows in a table
const rowCount:Locator=bookTable.locator("tr");
await expect(rowCount).toHaveCount(7);


const row:number=await rowCount.count();
console.log("Number of rows in a table:", row)
expect(row).toBe(7);

//2) count number of headers/columns
//const bookTable:Locator=page.locator("table[name='BookTable'] tbody tr th")
const column :Locator=rowCount.locator("th")
await expect(column).toHaveCount(4)

const columnCOunt :number=await column.count();
console.log("Number of column:", columnCOunt )
expect(columnCOunt).toBe(4)

// 3) Read all data from 2nd row (index 2 means 3rd row including header)

const secondrowData: Locator=rowCount.nth(2).locator("td")

const rowData :string[]=await secondrowData.allInnerTexts();
for(let text of rowData){
    console.log(text);
}
//console.log("2nd row data:" rowData)
expect(secondrowData).toHaveText(['Learn Java', 'Mukesh', 'Java', '500'])
console.log("printing 2nd row data......")


// 4) Read all data from the table (excluding header)

  console.log('Printing all Table Data.......');

  const allRowData=await rowCount.all();  // get all row locators   //all() returns array of locators

  console.log("BookName   Author  subject   price");

    for(let row of allRowData.slice(1))   // slice(1) --> skip header row 
    {
     const cols= await row.locator("td").allInnerTexts()
     console.log(cols.join('\t'))
       
    }


    // 5) Print book names where author is Mukesh
//const rowCount:Locator=bookTable.locator("tr");
//const auther:Locator=rowCount.locator("td");
const mukeshBook:string[]=[];
for(let row of allRowData.slice(1)){
const cells=await row.locator('td').allInnerTexts();
    //const authorName=cells[1];
    //const bookName=cells[0];

    // You can use below 2 statements instead of using above 3 statements to get authorName & Book Name
    const authorName=await row.locator('td').nth(1).innerText(); // Capture Author name 
    const bookName=await row.locator('td').nth(0).innerText(); // Capture Book name 

    if(authorName ==='Mukesh')
    {
        console.log(`${authorName} \t ${bookName}`)
        mukeshBook.push(bookName);
    }

}
expect(mukeshBook).toHaveLength(2); //Assertion

// 6) Calculate total price of all books

let totalPrice:number=0;

for(let row of allRowData.slice(1))   // slice(1) --> skip header row 
{
    //const cells:string[]=await row.locator('td').allInnerTexts();// captured all the td's from row
    //const price=cells[3]; // capture price from 3th index

    const price=await row.locator('td').nth(3).innerText(); // You can use single statement instead of using above 2 statements to get price
    totalPrice=totalPrice+parseInt(price);

}
console.log("Total price: ",totalPrice)

expect(totalPrice).toBe(7100); //Assertion





})