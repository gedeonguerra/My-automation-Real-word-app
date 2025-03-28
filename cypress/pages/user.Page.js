class MyInfoPage {


    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            submitButton: "[type='submit']"
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


}
export default MyInfoPage