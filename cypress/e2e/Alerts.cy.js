
describe('Alerts', () =>{

    //1) Javascript Alert: It will have some text and 'OK' button
    it('Js alert', () =>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        })

        //alert window automatically closed by cypress

        cy.get("#result").should('have.text','You successfully clicked an alert')

    })

    //2) Javascript Confirm Alert: It will have some text with 'OK' and "Cancel' buttons"
    it('JS confirm alert - OK',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm');
        })
//cypress automatically close alert window by using ok button
        cy.get("#result").should('have.text','You clicked: Ok')

    })

    it('JS confirm alert - Cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm');
        })

        cy.on('window:confirm',()=> false); // cypress closes alert window using cancel button

        cy.get("#result").should('have.text','You clicked: Cancel')

    })

    //3) Javascript Prompt Alert: It will have some text with text box for user input along with "ok"
    it.only('JS prompt alert',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click();

        //cypress will automatically close prompt alert - it will use OK button

        cy.get("#result").should('have.text','You entered: welcome')
    })

    //4) Authenticated Alert
    it('Authenticated alert',()=>{
        
        //approach 1
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth: 
                                                                    {
                                                                        username: "admin", 
                                                                        password: "admin"
                                                                    } 
                                                                });
        cy.get("div[class='example'] p").should('have.contain','Congratulations')
    })

})