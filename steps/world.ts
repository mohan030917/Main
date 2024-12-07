import { After, Before,setDefaultTimeout, Status } from "@cucumber/cucumber";
import { Browser,chromium,Page } from "playwright";

let page: Page;
let browser: Browser;
let context;

setDefaultTimeout(300000);

Before( async () => {
    


  // Launch a browser (e.g., Chromium)
  const browser = await chromium.launch({
    headless: false, // Set to true for headless mode
    slowMo: 500, // Slow down execution for debugging
  });

  // Create a new context
  const context = await browser.newContext();

  // Create a new page
  const page = await context.newPage();

  // Navigate to the desired URL
  await page.goto("https://in.bookmyshow.com/explore/home/chennai");
  await console.log("page title is "+ await page.title())

}
)

After(async function (Scenario) {
    if (Scenario.result!.status === Status.FAILED) {
        await this.attach(
            await page.screenshot({
                path: `./Screenshots/${Scenario.pickle.name}.png`,
                fullPage: true,
            }),
            "image/png"
        );
    }
    await browser.close();
});

export{page,browser};


