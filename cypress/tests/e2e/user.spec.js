
import LoginPage from '../../pages/login.Page'
import MyInfoPage from '../../pages/user.Page'





const loginPage = new LoginPage()
const myInfoPage = new MyInfoPage()



describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
      myInfoPage.accessRegistrationPage()
      myInfoPage.checkSignUpPage()

      myInfoPage.fillPersonalDetails('FirstName', 'LastName',)
      myInfoPage.filRegistrationUser('testingUser', 'Password', 'confirmPassword',)
      


    })
  })

  describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it.skip('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
      myInfoPage.accessRegistrationPage()
      myInfoPage.checkSignUpPage()
      myInfoPage.fillPersonalDetailsIncomplete()
      myInfoPage.filRegistrationUserIncomplete()
      

    })
  })