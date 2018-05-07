async function main() {
  const webdriverio = require('webdriverio');

  // Open a Chrome browser.
  const browserOptions = {
      remoteHost: "http://localhost:4444",
      desiredCapabilities: {
          browserName: 'chrome',
          chromeOptions: {
              args: [
                  'disable-infobars',
              ]
          }
      }
  };
  const driver = webdriverio.remote(browserOptions);
  let browser = driver.init();

  try {

      // Navigate the browser to the "dashboard" page.
      await browser.url('http://localhost:3000/');
      
      // Pausing the page for presenation purposes.
      await browser.pause(3000);      
       
      // Click on the Gotham series
      await browser.click('h5=Gotham');

      // Pausing the page for presenation purposes.
      await browser.pause(3000);

  }
  catch (exception){
    console.log(exception);
  }
  finally {

      // Close the browser.
      await browser.end();
      
  }

}

main();
