const {Builder, By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromeWebdriver = require('chromedriver');

// -----------------------------------------------------------//
//imports models

const link = require('./models/link');

async function Start(){

    chrome.setDefaultService(new chrome.ServiceBuilder(chromeWebdriver.path).build())
    let driver = await new Builder().forBrowser('chrome').build();

    try{
        login()
    }catch(error){
        console.log('building error code');
    }

    function login(){

        driver.get(link.url);
        console.log('yes, its work, commit this shit')
        setTimeout(() => {
            console.log('try connect')
        }, 10000);
    }
   

};

Start();

