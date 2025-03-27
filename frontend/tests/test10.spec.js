const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

describe('Test 10', function () {
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

   
 
it('10 - 4, should display: 6', async function () {
    await driver.get("http://127.0.0.1:8000/index.html");
    await driver.findElement(By.id("num1")).sendKeys("10");
    await driver.findElement(By.id("num2")).sendKeys("4");
    await driver.findElement(By.css("button:nth-child(2)")).click();
    
});

});
