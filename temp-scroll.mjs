import puppeteer from 'puppeteer-core';
const browser = await puppeteer.connect({browserWSEndpoint: 'ws://127.0.0.1:3000'});
const page = await browser.newPage();
await page.goto('http://localhost:3000', {waitUntil: 'networkidle2'});
await page.evaluate(() => window.scrollBy(0, 600));
await page.screenshot({path: 'temporary screenshots/screenshot-25-scrolled-nav.png', fullPage: false});
await browser.disconnect();
