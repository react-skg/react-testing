var webdriverio = require("webdriverio");
var options = {
  desiredCapabilities: {
    browserName: "chrome"
  }
};

webdriverio
  .remote(options)
  .init()
  .url("https://testwebapp20180417085330.azurewebsites.net/")
  .getTitle()
  .then(function(title) {
    console.log("Title was: " + title);
  })
  .pause(5000)
  .end()
  .catch(function(err) {
    console.log(err);
  });
