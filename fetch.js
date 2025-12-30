const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false,   // IMPORTANT
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    'https://donkeykongforum.net/index.php?topic=366.0',
    { waitUntil: 'domcontentloaded' }
  );

  // Give the JS challenge time to run
  await page.waitForTimeout(8000);

  // Wait for something that ONLY appears on the real page
  await page.waitForSelector('a', { timeout: 10000 });

  const html = await page.content();
  console.log(html);

  await browser.close();
})();
