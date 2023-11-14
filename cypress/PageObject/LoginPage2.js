class Login
{

    txtUseName="input[placeholder='Username']";
    txtPassword="input[placeholder='Password']";
    btnSubmit="button[type='submit']";
    loginLabel=".oxd-topbar-header-breadcrumb > .oxd-text";

    setUserName(username)
    {
        cy.get(this.txtUseName).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    verifyLogin()
    {
        cy.get(this.loginLabel).should('have.text','Dashboard');
    }
}

export default Login;