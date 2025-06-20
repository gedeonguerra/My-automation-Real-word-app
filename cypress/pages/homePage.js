// Classe que representa a página inicial da aplicação
class HomePage {

    // Método que retorna um objeto com os seletores usados na página
    selectorsList() {
        const selectors = {
            // Seletor do grid principal da homepage, baseado no atributo 'role'
            homePageGrid: "[role='presentation']",
        }

        return selectors
    }

    // Verifica se o grid principal da homepage está visível na tela
    checkHomePage() {
        // Busca o elemento pelo seletor e valida sua visibilidade
        cy.get(this.selectorsList().homePageGrid).should('be.visible')
    }
}

export default HomePage
