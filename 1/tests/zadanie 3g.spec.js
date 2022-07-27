const {test,expect} = require('@playwright/test');

test('Test from "Zadanie F_dropdowns" ',async ({page}) =>
{
await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
console.log (await page.title());
await expect(page).toHaveTitle("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)") ; 

const checkbox1 = page.locator("input[value$='option-1']");
const checkbox2 = page.locator("input[value$='option-2']");
const checkbox3 = page.locator("input[value$='option-4']");
const checkbox4 = page.locator("input[value$='option-4']");

await checkbox1.click();
await expect(checkbox1).toBeChecked;
await checkbox2.check();
await expect(checkbox2).toBeChecked;
await expect(checkbox3).toBeChecked;
await checkbox4.check();
await expect(checkbox4).toBeChecked;


await checkbox2.uncheck();
//await page.pause();
expect(await checkbox2.isChecked()).toBeFalsy();

//await page.pause();
await checkbox4.uncheck();
expect (await checkbox4.isChecked()).toBeFalsy();

})