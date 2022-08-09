const {test,expect} = require('@playwright/test');

test('Test from "Zadanie B" ',async ({page}) =>
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
await page.waitForLoadState('networkidle');
await expect(page).toHaveTitle("Contact form handler");
const consoleErrors = [];
page.on('console', msg => {
    if (msg.type() == 'error')
      console.log(`Error text: "${msg.text()}"`);
      consoleErrors.push(msg.text());
  });
console.log (await page.title());
const errorNotif = page.locator('body');
const errorTable = [];
errorTable == page.locator('body');

await expect (errorNotif).toContainText('Error: all fields are required');
await expect (errorNotif).toContainText('Error: Invalid email address');

console.log (await errorNotif.textContent());
  //  console.log(await error.innerText());

})