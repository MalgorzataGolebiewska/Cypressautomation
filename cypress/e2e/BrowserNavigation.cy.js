describe('Browser Navigation',() => 
{
    it('Navigation Test', () => 
    {
        cy.visit("https://demo.nopcommerce.com/");
        cy.title().should('eq','nopCommerce demo store'); // Home page

        cy.get('.menu-toggle').click();
        cy.get('.mobile > :nth-child(2) > [href="/electronics"]').click();
        cy.get("div[class=page-title] h1").should('have.text','Electronics'); // Cameras page

        cy.go('back'); // go back to previous page 
        cy.title().should('eq','nopCommerce demo store');

        cy.go('forward'); // back to cameras page
        cy.get("div[class=page-title] h1").should('have.text','Electronics');

        cy.go(-1); //go back to home page
        cy.title().should('eq','nopCommerce demo store');

        cy.go(1);
        cy.get("div[class=page-title] h1").should('have.text','Electronics');

        cy.reload();
    })
})