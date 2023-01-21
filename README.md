# delivery-app
Para manter a organização do código as coisas mais importantes vamos manter aqui para conhecimento público.

## Front
Adcionar coisas importantes para o front e yarn.

## Back
Será utilizada uma APIRestful com .NET6, banco de dados e deploy do DB MySQL. Até o momento foram feitas as seguintes funcionalidades:
- Login como conta anteriormente criada para gerar token de autenticação.
- Sign In de conta, porém limitando para que contas criadas assim não sejam Admins.
- Alteração de dados da conta (exceto email e senha) após validação de dados do login(Requer token de autenticação).
- Deleção de usuario alvo com base no seu email, porém é necessario passar dados de login de um Admin(Requer token de autenticação).
- Pesquisa todos os usuarios do banco de dados, porém é necessario passar dados de login de um Admin(Requer token de autenticação).
