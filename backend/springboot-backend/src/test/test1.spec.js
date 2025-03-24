const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

describe('Test 1', function () {
    this.timeout(30000);
    let driver;

    if (!fs.existsSync('./screenshots')) {
        fs.mkdirSync('./screenshots');
    }

    beforeEach(async function () {
        const chrome = require('selenium-webdriver/chrome');
        const options = new chrome.Options();
        options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    });

    afterEach(async function () {
        try {
            const alert = await driver.switchTo().alert();
            console.warn("Dismissing alert:", await alert.getText());
            await alert.accept();
        } catch (e) {}
        const filename = this.currentTest.fullTitle().replace(/['"]+/g, '').replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const screenshot = await driver.takeScreenshot();
        await fs.promises.writeFile(`./screenshots/${filename}.png`, screenshot, 'base64');
        if (driver) await driver.quit();
    });

    it('2 - 3, should display: -1', async function () {
        await driver.get("http://127.0.0.1:8000/index.html");
        await driver.findElement(By.id("num1")).sendKeys("2");
        await driver.findElement(By.id("num2")).sendKeys("3");
        await driver.findElement(By.css("button:nth-child(2)")).click();
        
    });
});
