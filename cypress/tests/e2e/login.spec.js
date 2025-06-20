import userData from '../../fixtures/user-data.json'
import LoginPage from '../../pages/login.Page'
import HomePage from '../../pages/homePage'

// Instância da página de login para reutilização dos métodos de autenticação
const loginPage = new LoginPage()
// Instância da página inicial para validação do carregamento após login
const homePage = new HomePage()

// Suite de testes para login bem-sucedido
describe('Login com sucesso RWA teste', () => {
    it('Deve fazer login com um usuário válido', () => {
        // Acessa a página de login
        loginPage.accessLoginPage()
        // Realiza login com credenciais válidas vindas do fixture
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        // Verifica se a homepage está visível após login
        homePage.checkHomePage()
    })
})

// Suite de testes para login com credenciais inválidas
describe('login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
        // Acessa a página de login
        loginPage.accessLoginPage()
        // Tenta login com usuário e senha inválidos
        loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
        // Verifica se o alerta de erro de login aparece
        loginPage.checkAccessInvalid()
    })
})
