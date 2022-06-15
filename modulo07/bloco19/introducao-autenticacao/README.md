**Introdução a Autenticação**

## O que esperamos que você entenda com esse exercício?

- Como implementar um fluxo de autenticação no backend;
- Duas das libs que vão te ajudar a implementar um fluxo de autenticação:
    - uuid
    - json-web-token

## Exercícios

- 📖 Enunciado
    
    ### Instruções gerais
    
    No exercício de hoje, vamos treinar os endpoints que fizemos no final da aula (*signup e login)*  e **um **endpoint autenticado (*user/profile)*. Para isso, vamos começar implementando individualmente as funções que são responsáveis por: gerar o id; e gerenciar o token de autenticação. Você pode usar o template de aula ou fazer o projeto do zero, a partir de uma pasta que você mesmo criar. Para isso, reunimos as instruções principais aqui:
    
    ### Inicie o projeto por aqui
    
    <aside>
    ⚠️ **IMPORTANTE** ⚠**️**
    
    1) Crie uma branch **a partir da branch master** para trabalhar no exercício de hoje. O nome da branch de hoje deve ser: `introducao-autenticacao`
    
    2) Dentro da pasta do módulo atual, crie uma pasta chamada `introducao-autenticacao`para trabalhar no exercício de hoje
    
    3) Não esqueça de entregar o arquivo `requests.rest` com os endpoints!
    
    </aside>
       
    ### Agora, faça os exercícios propostos
    
    Durante os exercícios, vamos fazer algumas perguntas para você. Responda-as em um arquivo *markdown* (veja as instruções no notion das semanas anteriores, caso precise).
    
    - Exercício 1
        
        Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 
        
        O uso dele é simples, veja abaixo:
        
        ```tsx
        import { v4 } from "uuid"
        
        const id = v4();
        
        console.log("Generated Id: ", id);
        ```
        
        a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*

        R): - Concordo, pois a quantidade de caracteres que podem ser criados para gerar um ID torna quase que impossível ou difícil 
              existirem ID iguais.
        
        b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.* 
        
        R):
            
            b. *Na pasta: `services/`*

       ![image](https://user-images.githubusercontent.com/89301596/173713125-9feba013-67bd-4080-818c-07dbc1d37853.png)  
        
    - Exercício 2
        
        Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:
        
        - os dados que serão salvos no token (no nosso caso, o id);
        - a chave secreta usada pra criptografar o token;
        - algumas configurações, como o tempo de expiração
        
        Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:
        
        ```tsx
        import * as jwt from "jsonwebtoken";
        
        const expiresIn = "1min"
        
        const generateToken = (id: string): string => {
          const token = jwt.sign(
            {
              id
            },
            process.env.JWT_KEY as string,
            {
              expiresIn
            }
          );
          return token;
        }
        ```
        
        a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*
        
        ```json
        R): A variável que está no .env pode dar erro de tipagem e o sign recebe uma string
        ```
        
        b) *Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.*
        
        - Dicas
            
            b. Na pasta `service/`
            
            ```tsx
            import * as jwt from "jsonwebtoken";
            
              const expiresIn = "1min";
              const generateToken(input: AuthenticationData): string {
                const token = jwt.sign(
                  {
                    id: input.id,
                  },
                  process.env.JWT_KEY as string,
                  {
                    expiresIn
                  }
                );
                return token;
              }
            }
            
            type AuthenticationData = {
              id: string;
            }
            ```
            
        
    - Exercício 3
        
        Pronto, com essas três funções preparadas podemos criar o nosso endpoint. As informações dele são:
        
        - *Verbo/Método*: POST
        - *Path*: `/user/signup`
        - *Input:* O body da requisição deve ser
            
            ```json
            {
            	"email": "email do usuário",
            	"password": "senha do usuário"
            }
            ```
            
        - *Output*: O body da resposta deve ser
            
            ```json
            {
            	"token": "token gerado pelo jwt"
            }
            ```
            
        
        a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
        
        b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
        
        c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*
        
        - Dicas
            
            a, b, c.
            
            ```tsx
            app.post("/user/signup", async (req: Request, res: Response) => {
              try {
                // Item b. Validação do email
                if (!req.body.email || req.body.email.indexOf("@") === -1) {
                  throw new Error("Invalid email");
                }
            
                // Item c. Validação da senha
                if (!req.body.password || req.body.password.length < 6) {
                  throw new Error("Invalid password");
                }
            
                const userData = {
                  email: req.body.email,
                  password: req.body.password,
                };
            
                const id = generateId();
            
              
                await createUser(id, userData.email, userData.password);
            
                const token = generateToken({
                  id,
                });
            
                res.status(200).send({
                  token,
                });
              } catch (err) {
                res.status(400).send({
                  message: err.message,
                });
              }
            });
            ```
            
        
    - Exercício 4
        
        No login, vamos receber o email e a senha do usuário. Então, vamos precisar de uma função que realize essa busca no banco de dados para gente. 
        
        a) *Crie uma função que retorne as informações de um usuário a partir do email*
        
        - Dicas
            
            a.
            
            ```tsx
            const getUserByEmail = async(email: string): Promise<any> => {
               const result = await connection
                 .select("*")
                 .from(userTableName)
                 .where({ email });
            
               return result[0];
              }
            }
            ```
            
        
    - Exercício 5
        
        Agora, vamos implementar o endpoint de login, com as seguintes especificações:
        
        - *Verbo/Método*: POST
        - *Path*: `/user/login`
        - *Input:* O body da requisição deve ser
            
            ```json
            {
            	"email": "email do usuário",
            	"password": "senha do usuário"
            }
            ```
            
        - *Output*: O body da resposta deve ser
            
            ```json
            {
            	"token": "token gerado pelo jwt"
            }
            ```
            
        
        a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
        
        b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
        
        - Dicas
            
            a, b.
            
            ```tsx
            app.post("/user/login", async (req: Request, res: Response) => {
              try {
                // Item b. Validação do email
                if (!req.body.email || req.body.email.indexOf("@") === -1) {
                  throw new Error("Invalid email");
                }
            
                const userData = {
                  email: req.body.email,
                  password: req.body.password,
                };
            
                const user = await getUserByEmail(userData.email);
            
                if (user.password !== userData.password) {
                  throw new Error("Invalid password");
                }
            
                
                const token = generateToken({
                  id: user.id,
                });
            
                res.status(200).send({
                  token,
                });
              } catch (err) {
                res.status(400).send({
                  message: err.message,
                });
              }
            });
            ```
            
        
    - Exercício 6
        
        Ufa, agora temos toda a nossa base pronta para identificar o usuário. Antes de prosseguir, precisamos criar uma função que recebe o token e devolve as informações do usuário salvas nele. Veja o exemplo abaixo:
        
        ```tsx
        const expiresIn = "1min";
        
        const getData = (token: string): AuthenticationData => {
          const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
          const result = {
            id: payload.id,
          };
          return result;
        };
        ```
        
        a) *O que a linha `as any` faz? Por que precisamos usá-la ali?*

        ```json
        R): Será incluído a propriedade ID em result, portanto payload deverá ser um objeto
        ```
        
        b) *Crie uma função que realize a mesma funcionalidade da função acima*
        
        - Dicas
            
            b.
            
            ```tsx
            import * as jwt from "jsonwebtoken";
            
            const getData = (token: string): AuthenticationData => {
              const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
              const result = {
                id: payload.id,
              };
              return result;
            };
            ```
            
        
         
        
    - Exercício 7
        
        Agora, vamos criar um endpoint que retorne as informações do usuário logado. As especificações dele estão abaixo:
        
        - *Verbo/Método*: GET
        - *Path*: `/user/profile`
        - *Input:* Deve receber, nos headers, o token de autenticação:
            
            ```
            Authorization: token.do.usuario
            ```
            
        - *Output*: O body da resposta deve ser
            
            ```json
            {
            	"id": "id do usuário",
            	"email": "email do usuário"
            }
            ```
            
        
        a) *Comece criando uma função no data que retorne o usuário a partir do id*
        
        b) *Crie o endpoint com as especificações passadas*
        
        - Dicas
            
            a.
            
            ```tsx
             public async getUserById(id: string): Promise<any> {
                const result = await this.connection
                  .select("*")
                  .from(userTableName)
                  .where({ id });
            
                return result[0];
              }
            }
            ```
            
            b.
            
            ```tsx
            app.get("/user/profile", async (req: Request, res: Response) => {
              try {
                const token = req.headers.authorization as string;
            
               
                const authenticationData = getData(token);
            
                const user = await getUserById(authenticationData.id);
            
                res.status(200).send({
                  id: user.id,
                  email: user.email,
                });
              } catch (err) {
                res.status(400).send({
                  message: err.message,
                });
              }
            });
            ```