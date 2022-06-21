# Autorização e user roles

---

## O que esperamos que você entenda com  essa aula?

- Entender sobre autorização, com o conceito de User Roles.

---

## Exercícios

- 📖 Enunciado
    
    ### Instruções gerais
    
    No exercício de hoje, vamos treinar as modificações que fizemos na aula: criar *User Roles*. Você pode usar o template de aula ou fazer o projeto do zero, a partir de uma pasta que você mesmo criar. Para isso, reunimos as instruções principais aqui:
    
    ### Inicie o projeto por aqui
    
    <aside>
    ⚠️ **IMPORTANTE** ⚠️
    
    1) Crie uma branch **a partir da branch master** para trabalhar no exercício de hoje. O nome da branch de hoje deve ser: `criptografia-e-user-roles`
    
    2) Dentro da pasta do módulo atual, crie uma pasta chamada `criptografia-e-user-roles` para trabalhar no exercício de hoje
    
    3) Não esqueça de entregar o arquivo `requests.rest` com os endpoints!
    
    </aside>
    
    <aside>
    🛠 Quero iniciar o projeto do zero, como faço?
    
    - Veja aqui
        - Node e Typescript
            
            Para começar um projeto em Node, use o comando e siga as instruções
            
            ```bash
            npm init
            ```
            
            O node foi feito para rodarmos projetos escritos em JS. Para usarmos TS, temos que fazer uma configuração adicional. Começamos instalando:
            
            ```bash
            npm install typscript @types/node ts-node-dev
            ```
            
            Depois, colocamos um arquivo chamado `tsconfig.json`:
            
            ```json
            {
              "compilerOptions": {
                "target": "es6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
                "module": "commonjs" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
                "outDir": "./build" /* Redirect output structure to the directory. */,
                "rootDir": "./" /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */,
                "strict": true /* Enable all strict type-checking options. */,
                "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
                "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
              }
            }
            ```
            
            E, agora, podemos criar, no arquivo `package.json` os scripts de execução, como:
            
            `build`: serve para criar a pasta 'build' que possui todos os arquivos TS transpilados para JS;
            
            `start:dev`: roda o projeto usando o `ts-node-dev`, com hot reload
            
            `start`: roda o projeto já construído na pasta build;
            
            ```json
            "scripts": {
            		"start:dev": "ts-node-dev ./src/index.ts",
                "start": "node ./build/index.js",
                "build": "tsc"  
            },
            ```
            
        - Banco de Dados
            
            Nós criamos um banco de dados específico para cada um de vocês usar durante o Módulo de Backend. O host é `35.226.146.116` na porta `3306`. Os usuários, senhas e nomes do banco de dados foram enviados individualmente para vocês no slack. 
            
            **Não compartilhe essas informações com ninguém!** 
            
            **Não suba em repositórios do GitHub que sejam públicos, ou seja, não suba no GitHub que vocês tem conosco. Repetindo: não suba.**
            
            Lembre-se de instalar as dependências:
            
            ```bash
            npm install knex mysql @types/knex dotenv
            ```
            
            Crie uma variável para utilizar como conexão e configure o `dotenv`, criando o arquivo `.env` (adicione-o também no `.gitignore`)
            
            ```tsx
            import knex from "knex";
            import dotenv from "dotenv";
            
            dotenv.config();
            
            const connection = knex({
              client: "mysql",
              connection: {
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT || "3306"),
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
              },
            });
            ```
            
        - Express
            
            Lembre-se de instalar as dependências:
            
            ```bash
            npm install express @types/express
            ```
            
            O arquivo base tem que conter:
            
            - A criação do app `express`;
            - Colocar o `middleware` para converter o `body`;
            - Criar o servidor
            
            ```tsx
            import express from "express";
            
            import { AddressInfo } from "net";
            
            const app = express();
            
            app.use(express.json());
            
            const server = app.listen(process.env.PORT || 3003, () => {
              if (server) {
                const address = server.address() as AddressInfo;
                console.log(`Server is running in http://localhost:${address.port}`);
              } else {
                console.error(`Failure upon starting server.`);
              }
            });;
            ```
            
        - UUID e JWT
            
            Para instalar o UUID:
            
            ```bash
            npm install uuid @types/uuid
            ```
            
            Para o JWT:
            
            ```bash
            npm install jsonwebtoken @types/jsonwebtoken
            ```
            
    ---
    
        
    </aside>
    
    ### Agora, faça os exercícios propostos
    
    Durante os exercícios, vamos fazer algumas perguntas para você. Responda-as em um arquivo *markdown* (veja as instruções no notion das semanas anteriores, caso precise).
    
    - Exercício 1
        
        Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.
        
        a) *Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*
        
        b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*
        
        c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*
        
        d) *Altere o login para criar o token com o `role` do usuário*
        
        
        
    - Exercício 2
        
        Agora, vamos usar esse `role` no endpoint `/user/profile`. Somente o usuários "normais" podem acessar esse endpoint. 
        
        a) *Altere o endpoint para que retorne um erro de `Unauthorized` para os usuários que "não sejam normais" e tentem acessar esse endpoint*