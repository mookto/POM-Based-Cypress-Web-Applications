// cypress/pages/login.js
class LoginPage {
  userInput = 'input[name="username"]'; 
  passInput = 'input[name="password"]';
  loginBtn = 'button[type="submit"]';

  visit() {
    cy.visit(Cypress.config("baseUrl"));
  }

  login(user, pass) {
      cy.wait(5000) 
    cy.get(this.userInput).clear().type(user);
    cy.get(this.passInput).clear().type(pass);
    cy.get(this.loginBtn).click();
  }
}
module.exports = new LoginPage();