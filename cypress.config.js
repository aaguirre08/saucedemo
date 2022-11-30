const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "w3q718",
  chromeWebSecurity: false,
  retries: {
    runMode: 2,
  },
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
});
