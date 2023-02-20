import RemoveFromCart from "../pages/remove-from-cart-functions";
import AddToCart from "../pages/add-to-cart-functions";

beforeEach(() => {
  cy.visit(Cypress.config().baseUrl);
});

describe("Navigation to Software testing board ", () => {
  context("when user add items", () => {
    it("should successfully remove items to the cart", () => {
      cy.viewport(Cypress.config().viewport);
      AddToCart.click_whats_new_text()
      AddToCart.click_search_bar()
      AddToCart.add_item()
      RemoveFromCart.click_my_cart()
      cy.end();
    });
  });
});