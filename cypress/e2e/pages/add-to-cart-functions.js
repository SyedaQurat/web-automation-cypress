/* require("cypress-xpath");
xpath example:  //'//*[contains(text(),"Yes, I’m happy")]';*/

import addToCartLocators from "./add-to-cart-locators.js";

class AddToCart {
  click_whats_new_text() {
    cy.get(addToCartLocators.whats_new_text).eq(0).click();
  }

  click_search_bar(){
    cy.get(addToCartLocators.search_bar).type("pants").type('{enter}')
    cy.scrollTo(0, 500)
  }

  add_item(){
    cy.get(addToCartLocators.item_selected).eq(0).click();
    cy.get(addToCartLocators.size).click();
    cy.get(addToCartLocators.color).click();
    cy.get(addToCartLocators.add_to_cart_btn).click();
  }
}

export default new AddToCart();
