const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeWebdriver = require('chromedriver');


(async function Start(){

    chrome.setDefaultService(new chrome.ServiceBuilder(chromeWebdriver.path).build())
    let driver = await new webdriver.Builder().forBrowser('chrome').build();
        driver.get('https://www.google.com');
        console.log('yes, its work, commit this shit')
    try{
    }catch(error){
        console.log('building error code');
    }
})();