const { Builder, By, until } = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;

// Set default timeouts
const DEFAULT_TIMEOUT = 10000; // 10 seconds
const SHORT_TIMEOUT = 5000; // 5 seconds

// Set up the driver
let driver;

before(async () => {
    driver = await new Builder()
        .forBrowser('chrome')
        .build();
});

after(async () => {
    if (driver) {
        await driver.quit();
    }
});

describe('Webdriver Tests', function() {
    this.timeout(DEFAULT_TIMEOUT); // Increase timeout to 10 seconds
    
    // Reset browser state before each test
    beforeEach(async function() {
        this.timeout(DEFAULT_TIMEOUT); // Increase timeout for each test
        await driver.get('http://localhost:3232');
        await driver.wait(until.elementLocated(By.css('body')), DEFAULT_TIMEOUT);
    });
    
    it('should verify the page title', async () => {
        const title = await driver.getTitle();
        expect(title).to.equal('Atisa Maker');
    });

    it('should find and verify the New Project button', async () => {
        // Wait for the element with the specific title
        const newProjectElement = await driver.wait(until.elementLocated(By.xpath("//div[@title='Creates a new empty project']")), SHORT_TIMEOUT);
        expect(newProjectElement).to.be.ok;
        
        // Check if the element is clickable
        await newProjectElement.click();
        expect(newProjectElement).to.be.ok;
    });
});

