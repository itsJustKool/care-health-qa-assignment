const { config } = require("./base.mobile.conf");

exports.config = {
  ...config,
  env: "qa",
  specs: ["./test/specs/mobile/**/*.js"],
  capabilities: [
    {
      automationName: "XCUITest",
      deviceName: "iPhone 12", //iPhone XR
      platformName: "iOS",
      platformVersion: "14.5",
      orientation: "PORTRAIT",
      maxInstances: 1,
      // app: "",
      useNewWDA: true,
    },
  ],
};
