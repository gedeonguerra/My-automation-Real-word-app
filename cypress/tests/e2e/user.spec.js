import LoginPage from '../../pages/login.Page'
import MyInfoPage from '../../pages/user.Page'

// Instância da página de login (não usada diretamente aqui, mas pode ser útil em testes futuros)
const loginPage = new LoginPage()
// Instância da página de cadastro/usuário para interações no fluxo de registro
const myInfoPage = new MyInfoPage()

// Suite de testes para registro de novo usuário com dados válidos
describe('Registro de novo usuário com sucesso', () => {
    it('Deve registrar um novo usuário com informações válidas', () => {
        // Acessa a página de cadastro via URL direta
        myInfoPage.accessRegistrationPage()
        // Confirma que o formulário de cadastro está visível e pronto para uso
        myInfoPage.checkSignUpPage()

        // Preenche os campos obrigatórios com dados válidos
        myInfoPage.fillPersonalDetails('FirstName', 'LastName')
        // Preenche os dados de login (usuário, senha, confirmação) e submete o formulário
        myInfoPage.filRegistrationUser('testingUser', 'Password', 'confirmPassword')
    })
})

// Suite de testes para tentativa de registro com dados incompletos
describe('Tentar registrar um novo usuário com informações incompletas', () => {
    it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
        // Acessa a página de cadastro
        myInfoPage.accessRegistrationPage()
        // Verifica se o formulário está carregado e disponível para interação
        myInfoPage.checkSignUpPage()
        
        // Simula clique nos campos sem preencher (dados incompletos)
        myInfoPage.fillPersonalDetailsIncomplete()
        // Tenta submeter formulário incompleto e verifica mensagens de erro de validação
        myInfoPage.filRegistrationUserIncomplete()
    })
})
