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

    it('Drag and Drop usign plugin', () => {

        cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop");
        cy.wait(3000);

        cy.get('#menu-fried-chicken').drag('#plate-items');
        cy.get('#plate-items').should('have.text','Fried Chicken');
    })

    it.only('Scrolling Page', () => {

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html');


        //Denmark flag
        cy.get(':nth-child(51) > :nth-child(1) > img').scrollIntoView({duration:3000});
        cy.get(':nth-child(51) > :nth-child(1) > img').should('be.visible');

        cy.get(':nth-child(2) > tbody > :nth-child(5) > :nth-child(1) > img').scrollIntoView({duration:3000});
        cy.get(':nth-child(2) > tbody > :nth-child(5) > :nth-child(1) > img').should('be.visible');

        cy.get('#footer').scrollIntoView({duration:3000});
    })
})
