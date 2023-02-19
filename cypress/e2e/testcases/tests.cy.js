import SignUp from "../pages/signup-functions.js";
import Login from "../pages/login-functions";

beforeEach(() => {
  cy.visit(Cypress.config().baseUrl);
});

describe("Navigation to Software testing board ", () => {
  context("when user SignUp", () => {
    it("should signup successfully", () => {
      cy.viewport(Cypress.config().viewport);
      SignUp.click_signup_button() 
      SignUp.user_enter_details(
        Cypress.config().user_details.firstname, 
        Cypress.config().user_details.lastname,
        Cypress.config().user_details.email, 
        Cypress.config().user_details.password, 
        Cypress.config().user_details.password_confirm)
      SignUp.click_submit_button();
      cy.end();
    });
    
    it.only("should login successfully", () => {
      cy.viewport(Cypress.config().viewport);
      Login.click_login_button();
      Login.enter_customer_credentials(
        Cypress.config().user_login.email, 
        Cypress.config().user_login.password, 
      )
      Login.click_signin_button();
      cy.end();
    });
  });
});