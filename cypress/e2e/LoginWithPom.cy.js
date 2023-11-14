import Login from "../PageObject/LoginPage2";

describe('pom', () => 
{
    it('LoginTest',() =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        const ln=new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();
    })

    //using fixture
    it.only('LoginTestFixtures', () =>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangehrm').then((data) =>
        {
            const ln=new Login();
        ln.setUserName(data.username)
        ln.setPassword(data.password)
        ln.clickSubmit();
        ln.verifyLogin();
        })
    })
})