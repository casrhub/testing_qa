const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Calculator Subtraction Test', function () {
    this.timeout(30000);
    let driver;  // ✅ Define driver at the top level

    beforeEach(async function () {
        const chrome = require('selenium-webdriver/chrome');
        const options = new chrome.Options();
        options.addArguments('--headless', '--no-sandbox', '--disable-dev-shm-usage');
        driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    });

    afterEach(async function () {
        if (driver) {
            await driver.quit();  // ✅ Ensure the driver is closed after each test
        }
    });

    it('should correctly subtract 2 - 3 and display -1', async function() {
        await driver.get("http://127.0.0.1:8000/index.html");

        // Wait for input fields to be visible
        let num1Element = await driver.wait(until.elementLocated(By.id("num1")), 10000);
        await driver.wait(until.elementIsVisible(num1Element), 5000);

        let num2Element = await driver.wait(until.elementLocated(By.id("num2")), 10000);
        await driver.wait(until.elementIsVisible(num2Element), 5000);

        // Enter numbers
        await driver.findElement(By.id("num1")).sendKeys("2");
        await driver.findElement(By.id("num2")).sendKeys("3");

        // Click the **subtraction button** (assuming it’s the second button)
        await driver.findElement(By.css("button:nth-child(2)")).click();

        // Wait for result to appear and get its text
        let resultText = await driver.wait(until.elementLocated(By.id("result")), 5000);
        resultText = await resultText.getText();

        // Assert that the result is correct
        assert.strictEqual(resultText, "Result: -1");
    });
});
