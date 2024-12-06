import { Given } from "@cucumber/cucumber";

import { page } from "./world";

Given('I am on the BookMyShow login page', async ()=> {

    await page.waitForTimeout(3000);
await page.locator("//div[text()='Sign in']/.").click();
await page.waitForTimeout(3000);
  });