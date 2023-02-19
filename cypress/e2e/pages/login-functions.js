/* require("cypress-xpath");
xpath example:  //'//*[contains(text(),"Yes, I’m happy")]';*/

import loginLocators from "./login-locators.js";

class Login {
  click_login_button() {
    cy.get(loginLocators.login_btn).contains('Sign In').click();
  }

  click_signin_button(){
    cy.get(loginLocators.signin_btn).eq(1).click();
  }

  enter_customer_credentials(useremail, userpassword){
    cy.get(loginLocators.email).click().type(useremail);
    cy.get(loginLocators.password).click().type(userpassword);
  }

  assert_my_account_text(){
    cy.get(loginLocators.my_account_text).should("be.visible").contains('My Account')

    cy.on("window:alert", (text) => {
      expect(text).to.contains( "My Account");
    });
  }
}

export default new Login();
