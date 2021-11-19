//definindo uma data especifica para que o cookie armazenado não seja apagado ao
//fechar o navegador

//adicionamos 'path' para dizer a qual caminho pertence o cookie especificado

const myCookie = document.cookie
document.cookie = 'melissamottavaz@gmail.com; expires=fri; 26 nov 2020 12:00:00 UTC;path=/'

//podemos usar variaveis para armazenas um cookie

//caso queiramos alterar o valor do cookie armazenado em 'myCookie'
//basta atribuir um novo valor para 'document.cookie'

//uma forma de deletar um cookie, é não necessariamente excluindo ele
//podemos passar alguma data que ja tenha expirado, e ele sera excluido


console.log(myCookie)