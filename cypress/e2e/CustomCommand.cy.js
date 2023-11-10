describe('Custom commands', () =>{

    it.only("handling links", () =>{

        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })
})
