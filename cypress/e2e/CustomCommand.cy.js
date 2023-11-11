describe('Custom commands', () =>{

    it("handling links", () =>{

        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })

    it("overwriting existing command", () =>{

        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink("APPLE MACBOOK Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })

    it("Login command", ()=>{

        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink("Log in");
        cy.loginApp("testing@gmail.com","test123");

        cy.wait(3000);
        cy.get('.ico-account').should('have.text','My account');

    })
})
