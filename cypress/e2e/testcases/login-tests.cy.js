import Login from "../pages/login-functions";

beforeEach(() => {
  cy.visit(Cypress.config().baseUrl);
});

describe("Navigation to Software testing board ", () => {
  context("when user login", () => {
    it("should login successfully", () => {
      cy.viewport(Cypress.config().viewport);
      Login.click_login_button();
      Login.enter_customer_credentials(
        Cypress.config().user_login.email, 
        Cypress.config().user_login.password, 
      )
      Login.click_signin_button();
      cy.end();
    });


    it("should not login successfully", () => {
      cy.viewport(Cypress.config().viewport);
      Login.click_login_button();
      Login.enter_customer_credentials(
        Cypress.config().user_login.incorrect_email, 
        Cypress.config().user_login.password, 
      )
      Login.click_signin_button();
      cy.end();
    })
  });
});