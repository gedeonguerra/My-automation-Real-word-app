class HomePage {

    selectorsList() {
        const selectors = {
            homePageGrid: "[role='presentation']",

        }

        return selectors
    }
    checkHomePage() {

        cy.get(this.selectorsList().homePageGrid).should('be.visible')
        
    }
}


export default HomePage