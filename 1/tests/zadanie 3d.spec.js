const {test,expect} = require('@playwright/test');

test('Test from "Zadanie C" ',async ({page}) =>
{
await page.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
console.log (await page.title());
await expect(page).toHaveTitle("WebDriver | Contact Us") ; 

const last_name =  await page.locator("input[placeholder='Last Name']");
const first_name = await page.locator("input[placeholder='First Name']");
const email_address = await page.locator("input[name='email']");
const message = await page.locator("textarea[placeholder='Comments']");
const submitButton =  await page.locator("input[value='SUBMIT']");

await first_name.type("Dariusz");
await last_name.type("Wysocki");
await email_address.type("dariusz.wysocki@itmagination.com");
await message.type("Jak sie masz brachu");
await submitButton.click();

console.log (await page.title());
await expect(page).toHaveTitle("Gianni Bruno - Designer");
const thankYou = await page.locator('h1');
await expect(thankYou).toContainText('Thank You for your Message!');



})