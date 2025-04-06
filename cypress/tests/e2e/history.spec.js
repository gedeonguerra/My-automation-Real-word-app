import LoginPage from '../../pages/login.Page'
import userData from '../../fixtures/user-data.json'
import HitoryPage from '../../pages/transaction-historyPage'

const loginPage = new LoginPage()
const history = new HitoryPage()

describe('Visualizar histórico de transações com sucesso', () => {
    it('Deve exibir o histórico de transações de um usuário corretamente', () => {
        
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        history.successfulViewing()

    })
  })

  describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        
        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)

        history.failedViewing()

    })
  })




       