
describe("Check UI Elements", () =>{
    
    it("Checking Radio Buttons", () =>{

        cy.visit("http://test.rubywatir.com/radios.php")

        //visibility od radio buttons
        cy.get("input#radioId").should('be.visible')
        cy.get("input.radioclass").should('be.visible')

        //selecting radio buttons
        cy.get("input#radioId").check().should('be.checked')
        cy.get("input.radioclass").should('not.be.checked')
    })

    it("Checking Checkboxes", () =>{

        cy.visit("http://test.rubywatir.com/checkboxes.php")

        //visibility of element
        cy.get('input[value="baseball"]').should('be.visible')

        //Unselecting checkboxes
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')

        //Selecting single checbox - baseball
        cy.get('input[value="baseball"]').check().should('be.checked')

        //Selecting all checboxes
        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')

        //select first checkbox
        cy.get('input[type="checkbox"]').first().check().should('be.checked')
        cy.get('input[type="checkbox"]').last().check().should('be.checked')
    })
})

