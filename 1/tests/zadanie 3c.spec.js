const {test,expect} = require('@playwright/test');

test('Test from "Zadanie C" ',async ({page}) =>
{
  await Promise.all (
    [
        page.waitForNavigation(),
        page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html"),
    ]
   ) ;

console.log (await page.title());
await expect(page).toHaveTitle("WebDriver | Contact Us") ; 

const last_name =  await page.locator("input[placeholder='Last Name']");
const first_name = await page.locator("input[placeholder='First Name']");
const email_address = await page.locator("input[name='email']");
const submitButton =  await page.locator("input[value='SUBMIT']");

await first_name.type("Dariusz");
await last_name.type("Wysocki");
await email_address.type("aqwerty");

await Promise.all(
    [
        page.waitForNavigation(),
        submitButton.click(),
    ]
)


console.log (await page.title());
await expect(page).toHaveTitle("Contact form handler");
const errorNotif = page.locator('body');
await expect(errorNotif).toContainText('Error: Invalid email address');

})