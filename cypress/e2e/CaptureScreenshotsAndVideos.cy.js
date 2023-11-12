describe('Test Suite', () => 
{
    it('Capture Screenshot & Videos', ()=>
    {
        cy.visit("https://demo.nopcommerce.com/");
        cy.get('.menu-toggle').click();
        cy.get('.mobile > :nth-child(2) > [href="/electronics"]').click();
        cy.get("div[class=page-title] h1").should('have.text','Cameras'); //initialized error
    })

})