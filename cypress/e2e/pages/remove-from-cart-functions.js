/* require("cypress-xpath");
xpath example:  //'//*[contains(text(),"Yes, I’m happy")]';*/

import removeFromCart from "./remove-from-cart-locators";

class RemoveFromCart {
  click_my_cart() {
    cy.scrollTo('top')
    cy.get(removeFromCart.my_cart_display).click();
  }
}

export default new RemoveFromCart();
