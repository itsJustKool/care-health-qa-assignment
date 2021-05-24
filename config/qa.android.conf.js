const { config } = require("./base.mobile.conf");

exports.config = {
  ...config,
  env: "qa",
  specs: ["./test/specs/mobile/**/*.js"],
  capabilities: [
    {
      automationName: "UiAutomator2",
      avd: "android-test",
      deviceName: "android-test",
      platformName: "Android",
      orientation: "PORTRAIT",
      maxInstances: 1,
      // app: "",
      useNewWDA: true,
      autoGrantPermissions: true,
    },
  ],
};
