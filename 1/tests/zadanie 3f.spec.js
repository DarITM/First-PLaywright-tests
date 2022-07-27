const {test,expect} = require('@playwright/test');

test('Test from "Zadanie F_dropdowns" ',async ({page}) =>
{
await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");
console.log (await page.title());
await expect(page).toHaveTitle("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)") ; 
dropdown_menu_1 = page.locator('#dropdowm-menu-1');
dropdown_menu_2 = page.locator('#dropdowm-menu-2');
dropdown_menu_3 = page.locator('#dropdowm-menu-3');
dropdown_menu_4 = page.locator('#fruit-selects');

await dropdown_menu_1.selectOption("python");
await expect(dropdown_menu_1).toContainText("Python");

await dropdown_menu_2.selectOption("testng");
await expect(dropdown_menu_2).toContainText("TestNG");

await dropdown_menu_3.selectOption("css");
await expect(dropdown_menu_3).toContainText("CSS");

await dropdown_menu_4.selectOption("pear");
await expect(dropdown_menu_4).toContainText("Pear");


//await page.pause();






})