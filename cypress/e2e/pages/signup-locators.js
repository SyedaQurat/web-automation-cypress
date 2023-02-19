class signupLocators {
  login_btn = "li[class^='authorization-link'] a"
  signup_btn = "li a"
  create_customer_text="span[class='base']"
  firstname = "input[id=firstname]"
  lastname = "input[id=lastname]"
  email = "input[id=email_address]"
  password = "input[id=password]"
  password_confirm = "input[id=password-confirmation]"
  create_an_account_btn = "button[type='submit']"
}

export default new signupLocators();
