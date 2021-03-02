const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeWebdriver = require('chromedriver');

// -----------------------------------------------------------//
//imports models

const link = require('./models/link');

async function Start(){

    chrome.setDefaultService(new chrome.ServiceBuilder(chromeWebdriver.path).build())
    let driver = await new Builder().forBrowser('chrome').build();


    try{
        await driver.get(link.url);
        await driver.manage().setTimeouts( { implicit: 30000 } );
        const nameContat = await driver.findElements(By.xpath("//div[@class='JnmQF _3QmOg']//span[@*]"));
  
        for(let obj in nameContat){
            nameContat[obj].click();
            console.log('pontinho')
        }
        
    }catch(error){
        console.log('building error code');
    }

};

Start();

