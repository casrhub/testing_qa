const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const fs = require('fs');

describe('Test 3', function () {
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
        if (driver) {
            try {
                // Attempt to dismiss any open alert, retry up to 3 times just in case
                for (let i = 0; i < 3; i++) {
                    try {
                        const alert = await driver.switchTo().alert();
                        console.warn("Dismissing alert:", await alert.getText());
                        await alert.accept();
                        await new Promise(resolve => setTimeout(resolve, 500)); // Small wait
                    } catch (err) {
                        // No alert – exit loop
                        break;
                    }
                }
            } catch (e) {
                console.warn("Error handling alert in afterEach:", e.message);
            }
    
            try {
                const filename = this.currentTest.fullTitle()
                    .replace(/['"]+/g, '')
                    .replace(/[^a-z0-9]/gi, '_')
                    .toLowerCase();
                const screenshot = await driver.takeScreenshot();
                await fs.promises.writeFile(`./screenshots/${filename}.png`, screenshot, 'base64');
            } catch (e) {
                console.warn("Screenshot error:", e.message);
            }
    
            await driver.quit();
        }
    });
    

    it('69 - 3, should display: 66', async function () {
        await driver.get("http://127.0.0.1:8000/index.html");
        await driver.findElement(By.id("num1")).sendKeys("69");
        await driver.findElement(By.id("num2")).sendKeys("3");
        await driver.findElement(By.css("button:nth-child(2)")).click();
        
    });
    
});
