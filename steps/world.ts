
import { setDefaultTimeout, Before, After } from "@cucumber/cucumber";
import { Page, Browser, chromium } from "playwright";


let page: Page;
let browser: Browser;
setDefaultTimeout (60000);


Before(async () => {
    try {
        browser= await chromium.launch({headless:false});
        const context =await browser.newContext();
        page= await context.newPage();
        await page.goto("https://in.bookmyshow.com/explore/home/chennai");
        await console. log("titdle is "+(await page.title()));
    } catch (error) {
        await console.log("throw error on navigation "+error);
        
    }
    
}

); 
After(async () => {
await browser.close();
    
}

)

export {page,browser};
