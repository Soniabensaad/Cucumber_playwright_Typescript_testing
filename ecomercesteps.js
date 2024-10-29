import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();



Given('I navigate to {string}', async ({ page }, url) => {
    await page.goto(url);
});

Given('I click on {string}', async ({ page }, buttonText) => {
    await page.getByRole('button', { name: buttonText }).click();
});

Given('I enter E-Mail Address as {string}', async ({ page }, emailAddress) => {
    await page.getByPlaceholder('E-Mail Address').fill(emailAddress);
});

Given('I enter password as {string}', async ({ page }, password) => {
    await page.getByPlaceholder('Password').fill(password);
});

When('I click on the submit button', async ({ page }) => {
    await page.locator("input[value='Login']").click();
});

Then('I should verify the URL contains {string}', async ({ page }, logged_url) => {
await page.pause();
    await expect(page).toHaveURL(new RegExp(logged_url));
});

  