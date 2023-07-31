# Documentação da Aplicação

## Introdução

Esta documentação descreve as bibliotecas (libs) e tecnologias utilizadas na aplicação, bem como as rotas disponíveis para acesso por meio do software de teste de API chamado Insomnia. A aplicação foi construída com Node.js, utilizando o framework Express e TypeScript para desenvolvimento backend. Além disso, o banco de dados PostgreSQL foi escolhido para armazenar os dados da aplicação.

## Bibliotecas e Tecnologias Utilizadas

A seguir, são apresentadas as principais bibliotecas e tecnologias utilizadas no projeto:

- `bcryptjs`: Biblioteca para realizar o hash de senhas, garantindo a segurança das informações sensíveis armazenadas no banco de dados.

- `dotenv`: Biblioteca para carregar variáveis de ambiente a partir de um arquivo .env, permitindo uma melhor organização das configurações da aplicação.

- `express`: Framework web para Node.js que fornece recursos para construção de aplicativos web e APIs RESTful de forma simples e rápida.

- `express-async-errors`: Biblioteca que permite o tratamento de erros assíncronos nas rotas do Express de forma mais eficiente.

- `jsonwebtoken`: Biblioteca para implementação de autenticação baseada em tokens, utilizando o padrão JWT (JSON Web Tokens).

- `node-pg-migrate`: Biblioteca para facilitar a migração do banco de dados PostgreSQL, permitindo a criação e gerenciamento de esquemas e tabelas de forma controlada.

- `pg`: Pacote oficial de cliente PostgreSQL para Node.js, utilizado para realizar a conexão com o banco de dados e executar consultas SQL.

- `reflect-metadata`: Biblioteca para habilitar a reflexão em tempo de execução para uso com biblioteca TypeORM.

- `typeorm`: Framework ORM (Object-Relational Mapping) para Node.js que simplifica o acesso e manipulação do banco de dados através de objetos JavaScript/TypeScript.

- `zod`: Biblioteca para validação de dados com suporte a TypeScript, permitindo a definição de esquemas para validação de objetos.

##  Rode as Migrations antes de rodar o servidor

    - Para criar : npm run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts

    - Para rodar : npm run typeorm migration:run -- -d ./src/data-source

## Roda o Server

    - Powershell : npm run dev

## Rotas e Acesso no Insomnia

A aplicação possui diversas rotas para gerenciamento de contatos, clientes e autenticação. Abaixo estão listadas as rotas disponíveis e os endpoints correspondentes no Insomnia:

1. **Rotas de Contatos**

    - Criar um novo contato:
        - Método: POST
        - Endpoint: `/api/contacts`
        - Middleware(s) utilizados:
            - `checkerBodyValid`: Valida o corpo da requisição de acordo com o esquema definido em `contactsSchemaRequest`.
            - `checkerEmailMiddZiP`: Middleware personalizado para validação de e-mail e CEP.
            - `checkerZipCodeMidd`: Middleware personalizado para validação de CEP.
            - `checkerTokenValidMidd`: Middleware para verificar a validade do token de autenticação.
        

        
    - Atualizar informações de um contato existente:
        - Método: PATCH
        - Endpoint: `/api/contacts/:id`
        - Middleware(s) utilizados:
            - `checkerIdMidd`: Middleware para validar o ID do contato na URL.
            - `checkerBodyValid`: Valida o corpo da requisição de acordo com o esquema definido em `updateContactsSchemaRequest`.
            - `checkerEmailMiddZiP`: Middleware personalizado para validação de e-mail e CEP.
            - `checkerZipCodeMidd`: Middleware personalizado para validação de CEP.
            - `checkerTokenValidMidd`: Middleware para verificar a validade do token de autenticação.
            - `updateCheckerNotAdmin`: Middleware para garantir que apenas usuários não administradores podem atualizar o contato.
        

    - Listar todos os contatos:
        - Método: GET
        - Endpoint: `/api/contacts`
        - Controlador: `listContactControl`

    - Excluir um contato:
        - Método: DELETE
        - Endpoint: `/api/contacts/:id`
        - Middleware(s) utilizados:
            - `checkerIdMidd`: Middleware para validar o ID do contato na URL.
            - `checkerTokenValidMidd`: Middleware para verificar a validade do token de autenticação.
            - `updateCheckerNotAdmin`: Middleware para garantir que apenas usuários não administradores podem excluir o contato.
        

2. **Rotas de Clientes**
    - Criar um novo cliente:
        - Método: POST
        - Endpoint: `/api/clients`
        - Middleware(s) utilizados:
            - `checkerBodyValid`: Valida o corpo da requisição de acordo com o esquema definido em `clientsSchemaRequest`.
            - `checkerEmailMidd`: Middleware personalizado para validação de e-mail.
        
    - Atualizar informações de um cliente existente:
        - Método: PATCH
        - Endpoint: `/api/clients/:id`
        - Middleware(s) utilizados:
            - `checkerIdMidd`: Middleware para validar o ID do cliente na URL.
            - `checkerBodyValid`: Valida o corpo da requisição de acordo com o esquema definido em `updateClientsSchemaRequest`.
            - `checkerTokenValidMidd`: Middleware para verificar a validade do token de autenticação.
            - `updateCheckerNotAdmin`: Middleware para garantir que apenas usuários não administradores podem atualizar o cliente.
        
    - Listar todos os clientes:
        - Método: GET
        - Endpoint: `/api/clients`
        
    - Excluir um cliente:
        - Método: DELETE
        - Endpoint: `/api/clients/:id`
        - Middleware(s) utilizados:
            - `checkerIdMidd`: Middleware para validar o ID do cliente na URL.
            - `checkerTokenValidMidd`: Middleware para verificar a validade do token de autenticação.
            - `updateCheckerNotAdmin`: Middleware para garantir que apenas usuários não administradores podem excluir o cliente.
        

3. **Rota de Login**
    - Realizar login de usuário:
        - Método: POST
        - Endpoint: `/api/login`
        

4. **Rotas de Clientes e Contatos**
    - Listar todos os clientes e seus contatos:
        - Método: GET
        - Endpoint: `/api/clientandcontacts`
        
    - Listar todos os contatos de um cliente específico:
        - Método: GET
        - Endpoint: `/api/clientandcontacts/:id/contacts`
        - Middleware(s) utilizados:
            - `checkerIdMiddClient`: Middleware para validar o ID do cliente na URL.
        