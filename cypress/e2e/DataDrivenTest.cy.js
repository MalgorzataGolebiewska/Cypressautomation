
describe('MyTestSuite', ()=>{

    it('DataDrivenTest',() =>{

        cy.fixture('orangehrm2.json').then( (data)=>{

        
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

            data.forEach((userdata) => {

                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click();

                if(userdata.username=='Admin' && userdata.password=='admin123')
                {
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected);

                    cy.wait(5000);
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click(); // LogOut
                    cy.wait(5000);
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); //LogOut
                } 
                else {
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text',userdata.expected)
                }
                
            })
        })
        
    })
})