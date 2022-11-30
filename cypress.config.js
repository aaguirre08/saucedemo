const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
