// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

describe('Test 14', function () {
    this.timeout(30000);
    let driver;
    let vars;

    if (!fs.existsSync('./screenshots')) {
        fs.mkdirSync('./screenshots');
    }

    beforeEach(async function () {
        const chrome = require('selenium-webdriver/chrome');
        const options = new chrome.Options();
        options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
        vars = {};
    });

    afterEach(async function () {
        try {
            const alert = await driver.switchTo().alert();
            console.warn("Dismissing alert:", await alert.getText());
            await alert.accept();
        } catch (e) {
            // No alert to dismiss
        }
    
        const filename = this.currentTest.fullTitle()
            .replace(/['"]+/g, '')
            .replace(/[^a-z0-9]/gi, '_')
            .toLowerCase();
    
        const screenshot = await driver.takeScreenshot();
        await fs.promises.writeFile(`./screenshots/${filename}.png`, screenshot, 'base64');
    
        if (driver) await driver.quit();
    });
    

    it('Test 14', async function () {
        await driver.get("http://127.0.0.1:8000/index.html");

        // Enter first number (10)
        await driver.findElement(By.id("num1")).click();
        await driver.findElement(By.id("num1")).sendKeys("10");

        // Enter second number (-4)
        await driver.findElement(By.id("num2")).click();
        await driver.findElement(By.id("num2")).sendKeys("4");

        // Click the subtraction button (assuming it's the second button)
        await driver.findElement(By.css("button:nth-child(2)")).click();

        // Wait for the result to be updated
        await driver.wait(until.elementLocated(By.id("result")), 5000);
        const resultText = await driver.findElement(By.id("result")).getText();

        // Validate that the result is correctly displayed as "Result: 5"
        assert.strictEqual(resultText, "Result: 6");
    });
});
