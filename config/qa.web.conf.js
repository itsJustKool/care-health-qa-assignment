const { config } = require("./base.web.conf");

exports.config = {
  ...config,
  env: "qa",
  specs: ["./test/specs/**/*.js"],
  capabilities: [
    {
      maxInstances: 1,
      browserName: "chrome",
      acceptInsecureCerts: true,
      // "goog:chromeOptions": {
      //   args: [
      //     "--no-sandbox",
      //     "--disable-infobars",
      //     "--headless",
      //     "--disable-gpu",
      //     "--window-size=1280,720",
      //   ],
      // },
    },
    // {
    //   maxInstances: 1,
    //   browserName: "firefox",
    //   "moz:firefoxOptions": {
    //     // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
    //     // args: ['-headless']
    //   },
    // },
    // {
    //   maxInstances: 1,
    //   browserName: "safari",
    // },
  ],
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: "http://automationpractice.com/index.php",
};
