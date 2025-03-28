
import LoginPage from '../../pages/login.Page'
import MyInfoPage from '../../pages/user.Page'





const loginPage = new LoginPage()
const myInfoPage = new MyInfoPage()



describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      loginPage.accessLoginPage()
      cy.get('.css-13i4rnv-MuiGrid-root').click()
      loginPage.checkSignUpPage()

      myInfoPage.fillPersonalDetails('FirstName', 'LastName',)
      myInfoPage.filRegistrationUser('testingUser', 'Password', 'confirmPassword',)
      myInfoPage


    })
  })