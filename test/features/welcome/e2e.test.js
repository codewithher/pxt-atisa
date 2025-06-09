const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chai = require('chai');
const expect = chai.expect;

const DEFAULT_TIMEOUT = 10000; // 10 seconds
const SHORT_TIMEOUT = 5000; // 5 seconds

let driver;

before(async () => {
    const options = new chrome.Options();
    if (process.env.CI) {
        options.addArguments('--headless=new');
        options.addArguments('--no-sandbox');
        options.addArguments('--disable-dev-shm-usage');
    }
    
    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
});

after(async () => {
    if (driver) {
        await driver.quit();
    }
});

describe('Welcome Page Renders DOM', function() {
    this.timeout(DEFAULT_TIMEOUT);
    
    beforeEach(async function() {
        this.timeout(DEFAULT_TIMEOUT);
        await driver.get('http://localhost:3232');
        await driver.wait(until.elementLocated(By.css('body')), DEFAULT_TIMEOUT);
    });
    
    it('should verify the page title', async () => {
        const title = await driver.getTitle();
        expect(title).to.equal('Atisa Maker');
    });

    it('should find and verify the New Project button', async () => {
        const newProjectElement = await driver.wait(until.elementLocated(By.xpath("//div[@title='Creates a new empty project']")), SHORT_TIMEOUT);
        expect(newProjectElement).to.be.ok;
        
        await newProjectElement.click();
        expect(newProjectElement).to.be.ok;
    });
});

