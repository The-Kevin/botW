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
        const nameContat = await (await driver.findElement(By.className('_35k-1 _1adfa _3-8er'))).getText()
       console.log(nameContat)
        
    }catch(error){
        console.log('building error code');
    }

};

Start();

