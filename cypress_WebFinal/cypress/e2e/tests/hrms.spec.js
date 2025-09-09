// cypress/e2e/tests/login.spec.js
const LoginPage = require("../../pages/login.js");
const DashboardPage = require("../../pages/dashbaord.js");



describe("Login Test", () => {
  it("should login with valid credentials", () => {
    LoginPage.visit();
   
    LoginPage.login(
    
      Cypress.env("USER_NAME"),
      Cypress.env("USER_PASS")
    );
    cy.contains("Dashboard").should("be.visible");
  });
});

describe("Dashboard Tests", () => {
  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(
      Cypress.env("SUSER_NAME"),
      Cypress.env("USER_PASS")
    );
  });

  it("should view payslip", () => {
    DashboardPage.viewPayslip();
  });

  it("should view notice board", () => {
    DashboardPage.viewNoticeBoard();
  });
});