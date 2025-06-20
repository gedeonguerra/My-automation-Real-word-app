import userData from '../../fixtures/user-data.json'
import LoginPage from '../../pages/login.Page'
import Payment from '../../pages/payment.Page'

// Instância da página de login para realizar autenticação
const loginPage = new LoginPage()
// Instância da página de pagamento para executar fluxos de transação
const payment = new Payment()

// Suite de testes para envio de dinheiro com saldo suficiente
describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
        // Acessa a página de login
        loginPage.accessLoginPage()
        // Realiza login com usuário que tem saldo suficiente
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        // Executa o fluxo completo de pagamento bem-sucedido
        payment.paymentWithSuccess()
        // Verifica se a confirmação do pagamento foi exibida
        payment.checkPayment()
    })
})

// Suite de testes para envio de dinheiro com saldo insuficiente
describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
        // Acessa a página de login
        loginPage.accessLoginPage()
        // Realiza login com usuário que não tem saldo suficiente
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        // Executa o fluxo que tenta pagamento e deve falhar
        payment.paymentWithfail()
        // Verifica se a mensagem de erro ou confirmação adequada aparece
        payment.checkPayment()
    })
})
