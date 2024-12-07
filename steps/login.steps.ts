import { Given } from "@cucumber/cucumber";
import { page } from "./world";




Given('I am on the Product Store page', async ()=> {

    try {
        await page.locator("//div[text()='Sign in']/.").click();
        await page.waitForTimeout(3000);
        await page.locator("//div[@class='bwc__sc-1ihur1g-5 otNAQ in-animation']//form//div//label[@for='mobileNo']").click();
        await page.locator("//div[@class='bwc__sc-1ihur1g-5 otNAQ in-animation']//form//div//label[@for='mobileNo']").pressSequentially("9840678772")
        await page.waitForTimeout(1000);
        await page.locator("//div[@class='bwc__sc-1ihur1g-5 otNAQ in-animation']//button").click();
        await page.waitForTimeout(3000)
        
    } catch (error) {
        throw error

    }

  });