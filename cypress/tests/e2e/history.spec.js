import LoginPage from '../../pages/login.Page'
import userData from '../../fixtures/user-data.json'
import HitoryPage from '../../pages/transaction-historyPage'

// Instância da página de login para reutilizar métodos de login
const loginPage = new LoginPage()
// Instância da página de histórico para acessar os métodos de visualização
const history = new HitoryPage()

// Suite de testes para visualizar histórico de transações com sucesso
describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        // Acessa a página de login
        loginPage.accessLoginPage()
        // Realiza login com usuário que tem histórico de transações
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        // Executa o fluxo de visualização bem-sucedida do histórico
        history.successfulViewing()
    })
})

// Suite de testes para tentar visualizar histórico sem transações anteriores
describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        // Acessa a página de login
        loginPage.accessLoginPage()
        // Realiza login com usuário que possui histórico vazio ou sem transações
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        // Executa o fluxo que tenta visualizar o histórico e espera falha (sem transações)
        history.failedViewing()
    })
})
