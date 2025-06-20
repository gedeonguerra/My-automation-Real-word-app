// Classe que representa a funcionalidade de pagamento no app
class Payment {
    // Método que retorna os seletores usados nos campos e botões da página de pagamento
    selectorsList() {
        const selectors = {
            buttonNext: "[data-test='user-onboarding-next']",      // Botão 'Next' do onboarding do usuário
            bankName: "[placeholder='Bank Name']",                 // Campo para digitar o nome do banco
            routingNumber: "#bankaccount-routingNumber-input",     // Campo para digitar o número de roteamento bancário
            accountNumber: "#bankaccount-accountNumber-input",     // Campo para digitar o número da conta bancária
            submitField: "[data-test='bankaccount-submit']",       // Botão para enviar dados da conta bancária
            doneField: "[data-test='user-onboarding-next']",       // Botão para finalizar etapa do onboarding (mesmo seletor do buttonNext)
            newTransaction: '[data-test="nav-top-new-transaction"]', // Botão para iniciar nova transação
            searchBar: "[value='']",                                // Barra de pesquisa para buscar usuário
            chosenName: '[data-test="user-list-item-uBmeaz5pX',    // Usuário selecionado na lista (parece que está faltando um ']' aqui)
            amount: "[placeholder='Amount']",                       // Campo para inserir o valor da transação
            addANote: "[placeholder='Add a note']",                 // Campo para adicionar uma nota à transação
            submitPayment: "[data-test='transaction-create-submit-payment']", // Botão para submeter pagamento
            confimPayment: "[data-test='alert-bar-success']"        // Mensagem de confirmação de pagamento bem-sucedido
        }
        return selectors
    }

    // Realiza um pagamento com sucesso, preenchendo todas as etapas necessárias
    paymentWithSuccess() {
        // Avança a etapa do onboarding
        cy.get(this.selectorsList().buttonNext).click()

        // Preenche informações bancárias
        cy.get(this.selectorsList().bankName).type('PagBank')
        cy.get(this.selectorsList().routingNumber).type('321.456-9')
        cy.get(this.selectorsList().accountNumber).type('124356987-12')

        // Envia dados bancários e finaliza etapa do onboarding
        cy.get(this.selectorsList().submitField).click()
        cy.get(this.selectorsList().doneField).click()

        // Inicia nova transação
        cy.get(this.selectorsList().newTransaction).click()

        // Busca e seleciona o destinatário da transação
        cy.get(this.selectorsList().searchBar).type('Ted Parisian')
        cy.get(this.selectorsList().chosenName).click()

        // Define o valor e adiciona uma nota
        cy.get(this.selectorsList().amount).type('100')
        cy.get(this.selectorsList().addANote).type('payment test with funds')

        // Submete o pagamento
        cy.get(this.selectorsList().submitPayment).click()
    }

    // Tenta realizar um pagamento que deverá falhar (sem passar pelo onboarding)
    paymentWithfail() {
        // Inicia nova transação
        cy.get(this.selectorsList().newTransaction).click()

        // Busca e seleciona o destinatário da transação
        cy.get(this.selectorsList().searchBar).type('Ted Parisian')
        cy.get(this.selectorsList().chosenName).click()

        // Define valor e nota
        cy.get(this.selectorsList().amount).type('100')
        cy.get(this.selectorsList().addANote).type('payment test with funds')

        // Tenta submeter o pagamento
        cy.get(this.selectorsList().submitPayment).click()
    }

    // Verifica se a mensagem de sucesso da transação está visível
    checkPayment() {
        cy.get(this.selectorsList().confimPayment).should('contain', 'Transaction Submitted!')
    }
}

export default Payment
