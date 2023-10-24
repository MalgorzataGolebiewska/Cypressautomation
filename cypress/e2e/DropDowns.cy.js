///<reference types="Cypress" />

describe('Handle Dropdowns', () =>{

    it('dropdown with select', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country")
        .select('Italy', {forced: true})
        .should('have.value','Italy')
    })

    it('drobdown without select', ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container')
        .should('have.text','Italy')
    })

    it('auto suggest dropdown', () =>{

        cy.visit("https://www.wikipedia.org/")

        cy.get('#searchInput').type('Delhi')

        cy.get('.suggestions-dropdown').contains('Delhi Heights').click()
    })

    it('dynamic dropdown', () =>{

        cy.visit("https://www.google.com/")

        cy.get('#W0wltc').click()

        cy.get("textarea[name='q']").type('cypress automation')

        cy.get('div.wM6W7d>span').should('have.length', 12)

        cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{
            if($el.text()=='cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
        })

        cy.get("textarea[name='q']").should('have.value','cypress automation tutorial')

    })

    Cypress.on('uncaught:exception', (er, rummable) => {
        return false
    })
})