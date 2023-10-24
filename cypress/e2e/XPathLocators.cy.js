

describe('XPathLocators', () =>{

    it('find number of products', () =>{

        cy.visit("http://www.automationpractice.pl/index.php")

        cy.xpath("//ul[@id='home-page-tabs']/li[2]/a").click()
        cy.xpath("//div[@class='tab-content']/ul[2]/li").should('have.length', 6)
    
    })
})
