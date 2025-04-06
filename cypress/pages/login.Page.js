
class LoginPage {

    selectorsList() {
        const selectors = {

        usernameField: "[name='username']",
        PasswordField: "[name='password']",
        loginButton: "[type='submit']",
        wrongCredentialAlert: "[role='alert']",
        

        }
        return selectors 
    }

    accessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }


    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().PasswordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    
    
    
}
export default LoginPage


