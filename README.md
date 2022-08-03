# CRUD de Usuário + Permissão de Administrador

Nesta entrega foi desenvolvido um CRUD de usuário, criando algumas regras de acesso apenas para usuários administradores.

## Endpoints do serviço:
POST	/users	Criação de usuários

POST	/login	Gera um token JWT recebendo email e password no corpo da requisição como JSON.

GET	/users	Lista todos os usuários

GET	/users/profile	Retorna os dados do usuário logado (usuário a qual pertence o token que será necessário neste endpoint)

PATCH	/users/<uuid>	Atualiza os dados de um usuário
  
DELETE	/users/<uuid>	Deleta usuários do banco

O banco de dados é volátil, um array que é zerado toda vez que a aplicação reiniciar.

### POST - /users
Rota para criação de usuário com os seguintes dados:
  
name: string
  
email: string
  
password: string
  
isAdm: boolean

A rota de criação retorna todos os dados, com exceção da hash de senha. Não podem ser cadastrados dois usuário com o mesmo e-mail

### POST - /login
Rota de login recebendo email e password

A rota de login retorna um token JWT válido por 24h caso todas as validações passem
  
### GET - /users
A rota de listagem de usuários retorna todos os dados dos usuários, incluindo os hashs
  
Está rota está protegida por um middleware de validação do token JWT
  
Está rota só pode ser acessada por usuários que sejam administradores
  
### GET - /users/profile
A rota de perfil retorna os dados do usuário que fizer a requisição
  
Está rota está protegida por um middleware de validação do token JWT
  
### PATCH - /users/<uuid>
A rota de atualização de usuário é capaz de atualizar tanto um quanto todos os dados de um usuário
  
Está rota está protegida por um middleware de validação do token JWT
  
IMPORTANTE: O campo isAdm NÃO pode ser atualizado
  
IMPORTANTE: Apenas administradores podem atualizar qualquer usuário, usuários não-administradores podem apenas atualizar seu próprio usuário.
  
A rota de atualização de usuário retorna os dados do usuário atualizado
  
### DELETE - /users/<uuid>
A rota de exclusão de usuário é capaz de excluir usuários
  
Está rota está protegida por um middleware de validação do token JWT
  
IMPORTANTE: Apenas administradores podem excluir qualquer usuário, usuários não-administradores podem apenas excluir seu próprio usuário.
  
A rota de exclusão de usuário retorna um objeto com uma chave de nome "mensagem" com o valor "User deleted with success"
