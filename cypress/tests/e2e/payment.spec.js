import userData from '../../fixtures/user-data.json'
import LoginPage from '../../pages/login.Page'
import Payment from '../../pages/payment.Page'




const loginPage = new LoginPage()
const payment = new Payment()


describe('Enviar dinheiro com saldo suficiente', () => {
    it('Deve enviar dinheiro com sucesso', () => {
        
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        payment.paymentWithSuccess()
        payment.checkPayment()
    })
  })

  describe('Enviar dinheiro com saldo insuficiente', () => {
    it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
       
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        payment.paymentWithfail()
        payment.checkPayment()
    })
  })