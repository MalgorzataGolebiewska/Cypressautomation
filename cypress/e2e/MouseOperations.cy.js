import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

describe("Mouse Operations", ()=> {

    it('MouseHover', () => {

        cy.visit("https://demo.opencart.com/");

        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").should('not.be.visible');

        cy.get("#narbar-menu > ul > li:nth-child(1) > a").trigger('mousemove').click();

        cy.get("#narbar-menu > ul > li:nth-child(1) > div > div > ul > li:nth-child(2) > a").should('be.visible');

    })

    it('Right click', () => {

        //Approach1
        // cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
        // cy.get('.context-menu-one').trigger('contextmenu');
        // cy.get('.context-menu-icon-paste').should('be.visible');


        //Approach2
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
        cy.get('.context-menu-one').rightclick();
        cy.get('.context-menu-icon-paste').should('be.visible');

    })

    it('Double click', () =>{

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.get('#accept-choices').click();
        cy.wait(5000);
        cy.frameLoaded('#iframeResult'); //Load the frame

        //Approach1 - trigger()

        // cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick');
        // cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');

        //Approach2 - dblclick()

        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick();
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');
    })

    it.only('Drag and Drop usign plugin', () => {

        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')
        cy.wait(5000);
        cy.get('#box6').drag('#box106');


    })
})
