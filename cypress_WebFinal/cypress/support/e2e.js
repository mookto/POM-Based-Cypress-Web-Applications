// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on("uncaught:exception", (err, runnable) => {
  // Prevent Cypress from failing the test on React errors
  if (err.message.includes("Minified React error #418")) {
    return false;
  }
  // For all other errors, let Cypress fail
});
// cypress/support/e2e.js
Cypress.on("uncaught:exception", () => {
  return false;  // prevent Cypress from failing test on any AUT error
});
