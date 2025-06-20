// Classe que representa a página de cadastro (sign up) do usuário
class MyInfoPage {

    // Retorna os seletores usados na página de cadastro
    selectorsList() {
        const selectors = {
            // Campo do primeiro nome
            firstNameField: "[name='firstName']",
            // Campo do sobrenome
            lastNameField: "[name='lastName']",
            // Campo do nome de usuário para login
            userNameField: "[name='username']",
            // Campo para senha
            passwordField: "[name='password']",
            // Campo para confirmação da senha
            confirmPasswordField: "[name='confirmPassword']",
            // Botão para enviar o formulário de cadastro
            submitButton: "[type='submit']",
            // Container principal da página de cadastro
            signUpPageGrid: ".SignUpForm-paper",
            // Elementos que indicam mensagens de erro de validação
            mensageError: "[aria-invalid='true']",
        }
        return selectors
    }
    
    // Preenche os campos de nome e sobrenome com dados fornecidos
    fillPersonalDetails(firstNameTest, lastNameTest) {
        cy.get(this.selectorsList().firstNameField).type(firstNameTest)
        cy.get(this.selectorsList().lastNameField).type(lastNameTest) 
    }

    // Preenche o registro do usuário com nome, senha e confirmação, e submete o formulário
    filRegistrationUser(testingUser, password, confirmPassword) {
        cy.get(this.selectorsList().userNameField).type(testingUser)
        // Aqui está hardcoded '4321' ao invés da variável password, pode ser uma melhoria futura
        cy.get(this.selectorsList().passwordField).type(4321)
        cy.get(this.selectorsList().confirmPasswordField).type(4321)
        cy.get(this.selectorsList().submitButton).click()
    }

    // Simula tentativa de preencher detalhes pessoais incompletos, apenas clicando nos campos
    fillPersonalDetailsIncomplete() {
        cy.get(this.selectorsList().firstNameField).click()
        cy.get(this.selectorsList().lastNameField).click()
    }

    // Simula tentativa de preencher registro incompleto e verifica mensagens de erro exibidas
    filRegistrationUserIncomplete() {
        cy.get(this.selectorsList().userNameField).click()
        cy.get(this.selectorsList().passwordField).click()
        cy.get(this.selectorsList().confirmPasswordField).click()
        // Clica fora dos campos para disparar validações de erro
        cy.get('.SignUpForm-paper').click()

        // Valida a presença das mensagens de erro para cada campo inválido
        cy.get(this.selectorsList().mensageError).eq(0)
        cy.get(this.selectorsList().mensageError).eq(1)
        cy.get(this.selectorsList().mensageError).eq(2)
        cy.get(this.selectorsList().mensageError).eq(3)
        cy.get(this.selectorsList().mensageError).eq(4)
    }

    // Acessa diretamente a página de cadastro via URL
    accessRegistrationPage() {
        cy.visit('http://localhost:3000/signup')
    }

    // Confirma a presença do container principal da página de cadastro
    checkSignUpPage() {
        cy.get(this.selectorsList().signUpPageGrid).click()
    }
}

export default MyInfoPage
