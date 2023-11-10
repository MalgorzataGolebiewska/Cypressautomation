describe('Custom commands', () =>{

    it("handling links", () =>{

        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })

    it.only("overwriting existing command", () =>{

        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink("APPLE MACBOOK Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })
})
