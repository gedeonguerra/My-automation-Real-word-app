class HitoryPage {
    selectorsList() {
        const selectors = {
            checkPage: '.MuiPaper-elevation1',
            checkTransaction: "[data-test='transaction-amount-6XY0Ud1i8sp4']",
            checkDetails: '.TransactionDetail-paper',
            checkFail: "[href='/contacts']",
            checkPageFail: "[style='height: 100%; width: 100%;']",


        }
        return selectors
    }

    successfulViewing() {
        cy.get(this.selectorsList().checkPage).should('contain', 'Public')

        cy.get(this.selectorsList().checkTransaction).click()

        cy.get(this.selectorsList().checkDetails).should('contain', 'Transaction Detail')
    }

    failedViewing() {
        cy.get(this.selectorsList().checkPage).should('contain', 'Public')

        cy.get(this.selectorsList().checkFail).click()

        cy.get(this.selectorsList().checkPageFail).should('contain', 'No Transactions')

        
    }
}
export default HitoryPage