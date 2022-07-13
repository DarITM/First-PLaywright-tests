const {test, expect} = require('@playwright/test');
test.only ('First test from the list_input a values for Contact',async ({browser}) =>
{
    const newBrowser = await browser.newContext();
    const newPage = await newBrowser.newPage();
    await newPage.goto("https://webdriveruniversity.com/Contact-Us/contactus.html");
console.log (await newPage.title());
await expect(newPage).toHaveTitle("WebDriver | Contact Us") ;   
const first_name = await newPage.locator("input[placeholder='First Name']");
await first_name.type("Dariusz");
const last_name = await newPage.locator("input[placeholder='Last Name']");
await last_name.type("Wysocki");
const email_address = await newPage.locator("input[placeholder='Email Address']");
await email_address.type("dariusz.wysocki@itmagination.com");
const message = await newPage.locator("textarea[placeholder='Comments']");
await message.type("Great deal");
const reset =await newPage.locator("input[value='RESET']");
await reset.click();

await expect (first_name).toContainText('');
await expect (last_name).toContainText('');
await expect (email_address).toContainText('');
await expect (message).toContainText('');


});

test ('First a test from the list',async ({page}) =>
{
    await page.goto("https://google.pl");
    console.log (await page.title());
    await expect(page).toHaveTitle("Google")

});