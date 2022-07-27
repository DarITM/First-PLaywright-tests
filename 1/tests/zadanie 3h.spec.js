const {test,expect} = require('@playwright/test');

test('Test from "Zadanie F_dropdowns" ',async ({page}) =>
{
await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
console.log (await page.title());
await expect(page).toHaveTitle("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)") ; 


const radioblue = page.locator("input[value$='blue']");
const radiogreen = page.locator("input[value$='green']");
const radioyellow = page.locator("input[value$='yellow']");
const radioorange = page.locator("input[value$='orange']");
const radiopurple = page.locator("input[value$='purple']");
const radiolettuce =page.locator("input[value$='lettuce']");
const radiocabbage =page.locator("input[value$='cabbage']");
const radiopumpkin =page.locator("input[value$='pumpkin']");

await radioblue.click();
await expect(radioblue).toBeChecked;
await radiogreen.click();
await expect(radiogreen).toBeChecked;
await radioyellow.click();
await expect(radioyellow).toBeChecked;
await radioorange.click();
await expect(radioorange).toBeChecked;
await radiopurple.click();
await expect(radiopurple).toBeChecked;

await radiolettuce.click();
await expect(radiolettuce).toBeChecked;

await expect(radiocabbage).toBeDisabled;
await expect(radiopumpkin).toBeChecked;





})