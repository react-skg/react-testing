var { appliToolsKey } = require("../keys");

async function main() {
  const webdriverio = require("webdriverio");

  // Open a Chrome browser.
  const browserOptions = {
    remoteHost: "http://localhost:4444",
    desiredCapabilities: {
      browserName: "chrome",
      chromeOptions: {
        args: ["disable-infobars"]
      }
    }
  };
  const driver = webdriverio.remote(browserOptions);
  let browser = driver.init();

  //Initialize the eyes SDK and set your private API key.
  const { Eyes, Target } = require("@applitools/eyes.webdriverio");
  let eyes = new Eyes();
  eyes.setApiKey(appliToolsKey);

  try {
    // Start the test and set the browser's viewport size to 800x600.
    await eyes.open(browser, "Hello World!", "My 5th Javascript test!", {
      width: 800,
      height: 600
    });

    // Navigate the browser to the "dashboard" page.
    await browser.url("http://localhost:3000/");

    // Visual checkpoint #1.
    await eyes.check("Main Page", Target.window());

    // Pausing the page for presenation purposes.
    await browser.pause(3000);

    // Click on the Gotham series
    await browser.setValue('//input[@type="search"]', "Gotham");

    // Pausing the page for presenation purposes.
    await browser.pause(5000);

    // Visual checkpoint #12
    await eyes.check("Search Results", Target.window());

    // End the test.
    await eyes.close();
  } catch (exception) {
    console.log(exception);
  } finally {
    // Close the browser.
    await browser.end();

    // If the test was aborted before eyes.close was called ends the test as aborted.
    await eyes.abortIfNotClosed();
  }
}

main();
