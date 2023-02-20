/* require("cypress-xpath");
xpath example:  //'//*[contains(text(),"Yes, I’m happy")]';*/

import signupLocators from "./signup-locators.js";

class SignUp {

  click_login_button() {
    cy.get(signupLocators.login_btn).contains('Sign In').click();
  }
  click_signup_button() {
    cy.get(signupLocators.signup_btn).contains('Create an Account').click();
  }

  
  user_enter_details(userfirstname, userlastname, useremail, userpassword, user_password_confirm){
    cy.get(signupLocators.create_customer_text).should("be.visible");
    cy.get(signupLocators.firstname).click().type(userfirstname);
    cy.get(signupLocators.lastname).click().type(userlastname);
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = useremail + id + "@gmail.com"
    cy.get(signupLocators.email).click().type(testname);
    cy.get(signupLocators.password).click().type(userpassword);
    cy.get(signupLocators.password_confirm).click().type(user_password_confirm);
  }

  user_no_details(userfirstname, userlastname, useremail, userpassword, user_password_confirm){
    cy.get(signupLocators.create_customer_text).should("be.visible");
    cy.get(signupLocators.firstname).click().type(userfirstname);
    cy.get(signupLocators.lastname).click().type(userlastname);
    cy.get(signupLocators.email).click().type(useremail);
    cy.get(signupLocators.password).click().type(userpassword);
    cy.get(signupLocators.password_confirm).click().type(user_password_confirm);
  }

  click_submit_button(){
    cy.get(signupLocators.create_an_account_btn).eq(1).click();
  }
}

export default new SignUp();
