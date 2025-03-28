class MyInfoPage {


    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            submitButton: "[type='submit']",
            signUpPageGrid: ".SignUpForm-paper",
            mensageError: "[aria-invalid='true']",
            

            
        }
        return selectors
    }
    
    fillPersonalDetails(firstNameTest, lastNameTest,) {
        cy.get(this.selectorsList().firstNameField).type(firstNameTest)
        cy.get(this.selectorsList().lastNameField).type(lastNameTest) 
    }

    filRegistrationUser(testingUser, password, confirmPassword,) {
        cy.get(this.selectorsList().userNameField).type(testingUser)
        cy.get(this.selectorsList().passwordField).type(4321)
        cy.get(this.selectorsList().confirmPasswordField).type(4321)
        cy.get(this.selectorsList().submitButton).click()
    }

    fillPersonalDetailsIncomplete() {
        cy.get(this.selectorsList().firstNameField).click()
        
        cy.get(this.selectorsList().lastNameField).click()
        
      

    }

    filRegistrationUserIncomplete() {
        cy.get(this.selectorsList().userNameField).click()

        cy.get(this.selectorsList().passwordField).click()

        cy.get(this.selectorsList().confirmPasswordField).click()

        cy.get('.SignUpForm-paper').click()

        cy.get(this.selectorsList().mensageError).eq(0)
        cy.get(this.selectorsList().mensageError).eq(1)
        cy.get(this.selectorsList().mensageError).eq(2)
        cy.get(this.selectorsList().mensageError).eq(3)
        cy.get(this.selectorsList().mensageError).eq(4)
    }

    accessRegistrationPage() {
        cy.visit('http://localhost:3000/signup')
    }

    checkSignUpPage() {
        cy.get(this.selectorsList().signUpPageGrid).click()
    }

}
export default MyInfoPage