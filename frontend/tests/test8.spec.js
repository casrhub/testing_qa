const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

describe('Test 8', function () {
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

   
  it('Test 1', async function() {
    await driver.get("http://127.0.0.1:8000/index.html");

    // Wait for num1 to be visible before interacting with it
    let num1Element = await driver.wait(until.elementLocated(By.id("num1")), 10000);
    await driver.wait(until.elementIsVisible(num1Element), 5000);

    await driver.findElement(By.id("num1")).click();
    await driver.findElement(By.id("num1")).sendKeys("2");

    let num2Element = await driver.wait(until.elementLocated(By.id("num2")), 10000);
    await driver.wait(until.elementIsVisible(num2Element), 5000);

    await driver.findElement(By.id("num2")).click();
    await driver.findElement(By.id("num2")).sendKeys("3");

    await driver.findElement(By.css("button:nth-child(1)")).click();
  });
});