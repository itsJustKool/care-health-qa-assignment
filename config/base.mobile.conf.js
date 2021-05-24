exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: "local",
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called.
  //
  specs: ["./test/specs/mobile/**/*.js"],
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "error",
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: "",
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 40000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  port: 4723, // default appium port
  services: [
    [
      "appium",
      {
        port: 4723,
        debugLogSpacing: true,
        relaxedSecurity: true,
      },
    ],
  ],

  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: "jasmine",
  //
  // The number of times to retry the entire spec file when it fails as a whole
  // specFileRetries: 1,
  //
  // Delay in seconds between the spec file retry attempts
  // specFileRetriesDelay: 0,
  //
  // Whether or not retried spec files should be retried immediately or deferred to the end of the queue
  // specFileRetriesDeferred: false,
  //
  // Test reporter
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "report/allure-results",
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        disableMochaHooks: true,
      },
    ],
  ],

  // Options to be passed to Jasmine.
  jasmineOpts: {
    // Babel setup
    helpers: [require.resolve("@babel/register")],
    // Jasmine default timeout
    defaultTimeoutInterval: 600000,
    //
    // The Jasmine framework allows interception of each assertion in order to log the state of the application
    // or website depending on the result. For example, it is pretty handy to take a screenshot every time
    // an assertion fails.
    // expectationResultHandler: function (passed, assertion) {
    //   // do something
    // },
  },
  afterTest: function (
    test,
    context,
    // eslint-disable-next-line no-unused-vars
    { error, result, duration, passed, retries }
  ) {
    if (error) {
      browser.takeScreenshot();
    }
  },

  onComplete: function () {
    const allure = require("allure-commandline");
    const reportError = new Error("Could not generate Allure report");
    const generation = allure([
      "generate",
      "report/allure-results",
      "-o",
      "report/allure-report",
      "--clean",
    ]);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 70000);

      generation.on("exit", function (exitCode) {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(reportError);
        }

        resolve();
      });
    });
  },
};
