const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://stagingv2.smartoffice.ai/auth/login",
    viewportWidth: 1620,
    viewportHeight: 800, 
    env: {
      ILYN_URL: "http://3.109.227.225:3333/",
      ILYN_USER: "01980466884",
      ILYN_PASS: "12345678",
      USER_NAME: "mahedi.hasan@byslglobal.com",
      USER_PASS: "12345678",
      SUSER_NAME: "tauhedul.amin@byslglobal.com",
    },
    specPattern: "cypress/e2e/tests/**/*.spec.js",
    supportFile: "cypress/support/e2e.js",
    setupNodeEvents(on, config) {
      // no cucumber preprocessor needed
      return config;
    }
  }
});

