const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
