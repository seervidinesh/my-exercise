const puppeteer = require("puppeteer");
test("E2E testing", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 100
  });
  const page = await browser.newPage();
  await page.goto(
    "file:///Users/dineshseervi/Documents/AttainU/My-Excersize/jestBot/index.html"
  );

  await page.click("#name");
  await page.type("#name", "Dinesh Seervi");

  await page.click("#age");
  await page.type("#age", "24");
  await page.click("#btn-click");
}, 1000000);
