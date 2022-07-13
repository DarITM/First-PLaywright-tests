const {test,expect} = require('@playwright/test');

test('First test from the list',async ({page}) =>
{
await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
console.log (await page.title());
await expect(page).toHaveTitle("WebDriver | Contact Us") ; 
const last_name = await page.locator("input[placeholder='Last Name']");
const submitButton = await page.locator("input[value='SUBMIT']");


await last_name.type("Wysocki");
//const email_address = await newPage.locator("input[placeholder='Email Address']");
//await email_address.type("dariusz.wysocki@itmagination.com");
await submitButton.click();
await expect(page).toHaveTitle("Contact form handler");
const error = await page.locator ("//body)[1]");
console.log (error);

})