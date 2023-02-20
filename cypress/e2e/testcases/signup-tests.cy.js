import SignUp from "../pages/signup-functions.js";

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


    it("should not signup successfully", () => {
      cy.viewport(Cypress.config().viewport);
      SignUp.click_signup_button() 
      SignUp.user_no_details(
        Cypress.config().user_details.firstname, 
        Cypress.config().user_details.lastname,
        Cypress.config().user_details.no_email, 
        Cypress.config().user_details.password, 
        Cypress.config().user_details.password_confirm)
      SignUp.click_submit_button();
      cy.end();
    });
  })
});