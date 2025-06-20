// Classe que representa a página de login da aplicação
class LoginPage {

    // Retorna os seletores usados na página de login
    selectorsList() {
        const selectors = {
            // Campo para inserir o nome de usuário
            usernameField: "[name='username']",
            // Campo para inserir a senha (repare que 'PasswordField' está com P maiúsculo, manter consistência pode ser legal)
            PasswordField: "[name='password']",
            // Botão para enviar o formulário de login
            loginButton: "[type='submit']",
            // Alerta que aparece em caso de credenciais incorretas
            wrongCredentialAlert: "[role='alert']",
        }
        return selectors 
    }

    // Acessa a página de login via URL direta
    accessLoginPage() {
        cy.visit('http://localhost:3000/signin')
    }

    // Realiza o login preenchendo os campos e clicando no botão
    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().PasswordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    // Verifica se o alerta de credenciais inválidas está presente na tela
    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }
}

export default LoginPage
