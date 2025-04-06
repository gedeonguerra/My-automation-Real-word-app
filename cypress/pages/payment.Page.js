
class Payment {
    selectorsList() {
        const selectors = {
            buttonNext: "[data-test='user-onboarding-next']",
            bankName: "[placeholder='Bank Name']",
            routingNumber: "#bankaccount-routingNumber-input",
            accountNumber: "#bankaccount-accountNumber-input",
            submitField: "[data-test='bankaccount-submit']",
            doneField: "[data-test='user-onboarding-next']",
            newTransaction: '[data-test="nav-top-new-transaction"]',
            searchBar: "[value='']",
            chosenName: '[data-test="user-list-item-uBmeaz5pX',
            amount: "[placeholder='Amount']",
            addANote: "[placeholder='Add a note']",
            submitPayment: "[data-test='transaction-create-submit-payment']",
            confimPayment: "[data-test='alert-bar-success']"

        }
        return selectors
    }

    paymentWithSuccess() {
        cy.get(this.selectorsList().buttonNext).click()

        cy.get(this.selectorsList().bankName).type('PagBank')
        cy.get(this.selectorsList().routingNumber).type('321.456-9')
        cy.get(this.selectorsList().accountNumber).type('124356987-12')

        cy.get(this.selectorsList().submitField).click()
        cy.get(this.selectorsList().doneField).click()

        cy.get(this.selectorsList().newTransaction).click()
        cy.get(this.selectorsList().searchBar).type('Ted Parisian')
        cy.get(this.selectorsList().chosenName).click()

        cy.get(this.selectorsList().amount).type('100')
        cy.get(this.selectorsList().addANote).type('payment test with funds')
        cy.get(this.selectorsList().submitPayment).click()
    }

    paymentWithfail() {
        
        cy.get(this.selectorsList().newTransaction).click()
        cy.get(this.selectorsList().searchBar).type('Ted Parisian')
        cy.get(this.selectorsList().chosenName).click()

        cy.get(this.selectorsList().amount).type('100')
        cy.get(this.selectorsList().addANote).type('payment test with funds')
        cy.get(this.selectorsList().submitPayment).click()
    }

    checkPayment() {
        cy.get(this.selectorsList().confimPayment).should('contain', 'Transaction Submitted!')
    }
}
export default Payment