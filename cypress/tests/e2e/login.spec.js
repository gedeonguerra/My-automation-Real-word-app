import userData from '../../fixtures/user-data.json'
import LoginPage from '../../pages/login.Page'
import HomePage from '../../pages/homePage'

const loginPage = new LoginPage()
const homePage = new HomePage()



describe('Login com sucesso RWA teste', () => {
    it('Deve fazer login com um usuário válido', () => {
      
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
      homePage.checkHomePage()
      
    })
  })

  describe('login com credenciais inválidas', () => {
    it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
      
      loginPage.accessLoginPage()
      loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()

    })
  })