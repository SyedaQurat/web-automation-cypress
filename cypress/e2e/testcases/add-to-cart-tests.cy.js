import AddToCart from "../pages/add-to-cart-functions";

beforeEach(() => {
  cy.visit(Cypress.config().baseUrl);
});

describe("Navigation to Software testing board ", () => {
  context("when user add items", () => {
    it("should successfully add items to the cart", () => {
      cy.viewport(Cypress.config().viewport);
      AddToCart.click_whats_new_text()
      AddToCart.click_search_bar()
      AddToCart.add_item()
      cy.end();
    });


    it("should not successfully add items to the cart", () => {
      cy.viewport(Cypress.config().viewport);
      AddToCart.click_whats_new_text()
      AddToCart.click_search_bar()
      cy.end();
    });
  });
});