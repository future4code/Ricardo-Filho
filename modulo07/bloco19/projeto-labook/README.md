<h1>NWFS LaBook</h1>

<h2 id="topo">Conteúdo</h2>


   * [Exercicio da Semana](#sobre)
   
   * [Requisitos](#requisitos)

   * [O que funciona](#funciona)
       * [1 - Cadastrar](#cadastrar)
       * [2 - Criar Post](#criarpost)
       * [3 - Buscar um post por id](#postid)
       * [4 - Fazer Amizade](#famizade)
       * [5 - Desfazer Amizade](#damizade)
           * [5 - Desfazer Amizade que não existe](#deamizade)
       * [6 - Ver todo o Feed](#postsfriends)

  * [Desafios](#fdesafios)
       * [11 - Paginar Feed](#paginar)


  * [O que ainda não funciona](#nfunciona)

  * [Desafios](#ndesafios)

      * 7. Ver apenas um tipo de post do Feed
      * 8. Curtir Post
      * 9. Descurtir Post
      * 10. Comentar Post

<h2 id="sobre">Exercícios da Semana</h2>

Essa semana, mais um Freela surgiu. Um jovem empreendedor teve uma ideia revolucionária que parece ter dado certo, mas está precisando de uma força para deixar o backend redondo. Ele já tem um time cuidando do Frontend, e você irá cuidar do backend - com bastante atenção à alta complexidade que a ideia que ele teve requer. O Astrodev, já famoso pela qualidade das entregas de seu time de programadores, foi contatado e repassou a tarefa a você. Segue o email enviado por ele:

```
Prezada(o),

	Essa semana será simples. É só fazer o backend de uma rede social.
O nome da rede se chama LaBook, nasceu como uma rede de alunos de 
universidades americanas, e agora parece que já tem um número aceitável 
de usuários (2 bilhões).
	Você deverá construir o backend da LaBook, garantindo que 
que todos os requisitos descritos em anexo sejam cumpridos. O
prazo é até sexta-feira.
	É um contrato importante para nós, portanto, sem atrasos ou erros.

Att., 

Astrodev
```
<h4 align="right"><a href="#topo">Topo</a></h4>

Abaixo, encontra-se o anexo do e-mail do Astrodev.

<h2 id="requisitos"> Requisitos </h2>

O LaBook será uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal"), comentá-los e curti-los também. O desenvolvedor do frontend ~~acha que~~ é bastante experiente; dessa forma, já preparou uma lista de todos os endpoints que serão necessários para o projeto e foi adiantando o desenvolvimento enquanto você não chegava. Mas, alguns dos endpoints acabaram por ser feitos na pressa e estão um tanto desestrurados, e sem nenhum tipo de tratamento ou modelagem de dados. Seguem listados abaixo:

<h4 align="right"><a href="#topo">Topo</a></h4>

<aside>
⚠️ **IMPORTANTE** ⚠️

1) Crie uma branch **a partir da branch master** para trabalhar no exercício de hoje. O nome da branch de hoje deve ser: `projeto-labook`

2) Dentro da pasta do módulo atual, crie uma pasta chamada `projeto-labook` para trabalhar no exercício de hoje

</aside>

<h4 align="right"><a href="#topo">Topo</a></h4>

<aside>
⚠️ **Antes de começar, siga estes passos:**

Baixe o template do código: 

- **Template do Projeto:**
    
    [template-labook.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c887dd58-a27f-4d78-bc92-3bcff75957df/template-labook.zip)
    

Rode o comando `npm run migrations` para criar as tabelas

</aside>

<h4 align="right"><a href="#topo">Topo</a></h4>

**Endpoints a se organizar:**

### index.ts
```sql
import { app } from './app'
import { userRouter } from './routes/userRouter'
import { postRouter } from './routes/postRouter'  
import { amityRouter } from './routes/amityRouter'

app.use("/user", userRouter)
app.use("/post", postRouter)
app.use("/amity", amityRouter)
```

<h4 align="right"><a href="#topo">Topo</a></h4>

### app.ts
```sql
import express, {Express} from 'express'
import cors from 'cors'
import { AddressInfo } from "net"

export const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor Rodando em http://localhost: ${address.port}`);
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

```
<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="funciona"> O que funciona </h2>

<h2 id="cadastrar">- 1. Cadastrar</h2>
    
    Para o cadastro nessa rede social, o usuário deve fornecer seu nome, seu e-mail e uma senha. 

### userDatabase.ts

```sql
import { User } from '../model/user';
import { BaseDatabase } from './BaseDatabase';

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_users";

    public insertUser = async (
        user: User
    ) => {
        try {
        await UserDatabase
        .connection
        .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
        })
        .into(UserDatabase.TABLE_NAME)
        }
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
            
        }
    }

    public getUser = async () => {
        const getUsers = await UserDatabase
        .connection(UserDatabase.TABLE_NAME)
        .select("*")
        return getUsers
    }

    public getAll = async (): Promise<User[]> => {
        const getUsers = await UserDatabase
        .connection(UserDatabase.TABLE_NAME)
        .select("*");
        return getUsers;
    }
  
    public getUserId = async (id: string): Promise<User[]> => {
        const getUser = await UserDatabase
        .connection(UserDatabase.TABLE_NAME)
        .where("id", id);
        
        return getUser;
    }

    public deleteUser = async ( id: string ): Promise<void> => {
      await UserDatabase
      .connection(UserDatabase.TABLE_NAME)
      .where( "id", id)
      .delete();
    }
}
```
<h4 align="right"><a href="#topo">Topo</a></h4>

### userBusiness.ts
```sql
import { UserDatabase } from "../data/UserDatabase"
import { InvalidEmail, InvalidId, InvalidName, InvalidPassword } from "../error/customUsersErrors";
import { User, UserInputDTO } from "../model/user";
import { generateId } from "../services/generateId";

export class UserBusiness {
  public createUser = async (
    input: UserInputDTO
    ) => {

    try {
      const {
        email,
        name,
        password
      } = input;

      if(name.length < 5) { 
        throw new InvalidName()
      }

      if(!email || !email.includes("@")) {
        throw new InvalidEmail()
      }

      if(!password || password.length < 8){
        throw new InvalidPassword()
      }

      const id: string = generateId();

      const userDatabase = new UserDatabase();
      const user: User = {
        id,
        name,
        email,
        password
      }
    await userDatabase.insertUser(user);
     }
     catch (error: any) {
      throw new Error(error.message)
    }  
    
  }

  async getAll():Promise<any> {

    const userDatabase = new UserDatabase()
    const users = await userDatabase.getAll()

    if(!users) {
      throw new Error("Não foi possível encontrar usuários")
    }

    return users
  }
  
  async getUserId (id: string): Promise<User[]> {
    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserId(id)

    if(user.length === 0) {
      throw new InvalidId()
    }
    return user
  }

  public deleteUser = async (id: string): Promise<void> => {
    const userDatabase = new UserDatabase()
    await userDatabase.deleteUser(id)
  }
}

```

<h4 align="right"><a href="#topo">Topo</a></h4>

### userController.ts
```sql
import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { UserInputDTO } from "../model/user";

export class UserController {
    public createUser = async (
        req: Request,
        res: Response
        ) => {
            try {
                const{
                    name,
                    email,
                    password
                } = req.body;

                const input: UserInputDTO = {
                    name,
                    email,
                    password
                };

                const userBusiness = new UserBusiness;
                await userBusiness.createUser(input);

                res.status(200).send({
                    message: "Usuário Cadastrado com sucesso"
                });
            } catch (error:any) {
                res.status(400).send(error.message);
            }
    }

    public getAll = async (
        req: Request,
        res: Response
        ) => {
        try {
          const userBusiness = new UserBusiness();
          const users = await userBusiness.getAll();
    
          res.status(200).send(users);
        } catch (error:any) {
          res.status(400).send(error.message);
        }
      }
    
      public getUserId = async (req: Request, res: Response) => {
        try {
          const id = req.params.id;
          const userBusiness = new UserBusiness();
            const user = await userBusiness.getUserId(id);
            
            res.status(200).send({user})
        } catch (error:any) {
          res.status(400).send(error.message);
        }
      }

      async deleteUser( req: Request, res: Response): Promise<void> {
        try {
          const id = req.params.id;
          const userBusiness = new UserBusiness();
          await userBusiness.deleteUser(id);
    
          res.status(200).send({ message: "Usuário deletado com sucesso" });
        } catch (error:any) {
          res.status(400).send(error.message);
        }
      }
}
```

<h4 align="right"><a href="#topo">Topo</a></h4>

### userRouter.ts
```sql
import express from 'express';
import { UserController } from '../controller/userController';

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/create", userController.createUser);

userRouter.get("/all", userController.getAll);

userRouter.get("/:id", userController.getUserId);

userRouter.delete("/delete/:id", userController.deleteUser)
```

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="cadastrar">- 2. Criar post</h2>
    
    O post deve ser criado, passando-se as informações de: foto, descrição, data de criação e tipo ("normal" ou "evento").
    
### postDatabase.ts
```sql
import { post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_posts";
  
    public insertPost = async (
      post: post
      ) => {
        try {
        await PostDatabase
        .connection
        .insert({
          id:post.id,
          photo: post.photo,
          description: post.description,
          type: post.type,
          created_at: post.createdAt,
          author_id: post.authorId
         })
        .into(PostDatabase.TABLE_NAME);
    }
    catch (error:any) { 
      throw new Error(error.sqlMessage || error.message);
    }
  }
    public getAll = async (): Promise<post[]> => {
        const getPosts = await PostDatabase.connection(PostDatabase.TABLE_NAME)
        .select();
  
        return getPosts;
    }
  
    public getPostId = async (id: string): Promise<post[]> => {
      const getPost = await PostDatabase.connection(PostDatabase.TABLE_NAME)
      .where("id", id);
      
      return getPost;
  }

    public deletePost = async ( id: string ): Promise<void> => {
      await PostDatabase.connection(PostDatabase.TABLE_NAME)
      .where( "id", id)
      .delete();
    }

  }
```

<h4 align="right"><a href="#topo">Topo</a></h4>

### postBusiness.ts
```sql
import { PostDatabase } from "../data/PostDatabase"
import { InvalidDataPosts, InvalidPost } from "../error/customPostErros";
import { post, PostInputDTO } from "../model/post";
import { generateId } from "../services/generateId";

export class PostBusiness {
    public create = async (
      input: PostInputDTO
      ) => {

      try {
      const {
        photo,
        description,
        type,
        authorId
      } = input;

      if (!photo || !description || !type || !authorId) {
        throw new InvalidDataPosts()
      }
  
      const id = generateId()
  
      const postDatabase = new PostDatabase();
      const post: post = {
        id,
        photo,
        description,
        type,
        createdAt: new Date(),
        authorId
      }
      await postDatabase.insertPost(post)
    }
    catch (error: any) {
      throw new Error(error.message)
    }
  }
  
  async getAll (): Promise<any[]> {
      const postDatabase = new PostDatabase()
      const posts = await postDatabase.getAll()
    
      if(posts.length === 0) {
        throw new InvalidPost()
      }
      return posts
    }
    
    public getPostId = async (id: string): Promise<any[]> => {
      const postDatabase = new PostDatabase()
      const post = await postDatabase.getPostId(id)

      if(post.length === 0) {
        throw new InvalidPost()
      }
      return post
    }

    public deletePost = async (id: string): Promise<void> => {
      const postDatabase = new PostDatabase()
      await postDatabase.deletePost(id)
    }
  }
```

<h4 align="right"><a href="#topo">Topo</a></h4>

### postController.ts
```sql
import { Request, Response } from "express";
import { PostBusiness } from "../business/postBusiness";
import { PostInputDTO } from "../model/post";
import { convertDate } from "../services/convertDate";

export class PostController {

    public createPost = async (
      req: Request,
      res: Response
      ) => {
        try {
         const {
          photo,
          description,
          type,
          createdAt,
          authorId
          } = req.body;

          const input: PostInputDTO = {
          photo,
          description,
          type,
          createdAt,
          authorId
          }
   
         const postBusiness = new PostBusiness();
         await postBusiness.create(input);
   
         res.status(201).send({ message: "Post cadastrado com sucesso" });
   
       } catch (error:any) {
         res.status(400).send(error.message);
       }
     }
     
     public getAll = async (req: Request, res: Response) => {
       
      try {
        const postBusiness = new PostBusiness();
         const posts = await postBusiness.getAll();
        for(let i = 0; i < posts.length; i++) {
          posts[i].created_at = convertDate(posts[i]?.created_at);
        }
         res.status(200).send(posts);
       } catch (error:any) {
         res.status(400).send(error.message);
       }
     }

     public getPostId = async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const postBusiness = new PostBusiness();
          const post = await postBusiness.getPostId(id);
          
          res.status(200).send({post})
      } catch (error:any) {
        res.status(400).send(error.message);
      }
    }

     async deletePost( req: Request, res: Response): Promise<void> {
      try {
        const id = req.params.id;
        const postBusiness = new PostBusiness();
        await postBusiness.deletePost(id);
  
        res.status(200).send({ message: "Post deletado com sucesso" });
      } catch (error:any) {
        res.status(400).send(error.message);
      }
    }

   }
   
```

<h4 align="right"><a href="#topo">Topo</a></h4>

### postRouter.ts
```sql
import express from 'express';
import { PostController } from '../controller/postController';

export const postRouter = express.Router();

const postController = new PostController();

postRouter.post("/create", postController.createPost);

postRouter.get("/all", postController.getAll);

postRouter.get("/:id", postController.getPostId);

// postRouter.get("/:name", postController.getPostName);

postRouter.delete("/:id", postController.deletePost);
```

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="postid">- 3. Buscar um post por id</h2>

### postDatabase.ts
```sql
    public getPostId = async (id: string): Promise<post[]> => {
      const getPost = await PostDatabase.connection(PostDatabase.TABLE_NAME)
      .where("id", id);
      
      return getPost;
  }
```
### postBusiness.ts

```sql
    public getPostId = async (id: string): Promise<any[]> => {
      const postDatabase = new PostDatabase()
      const post = await postDatabase.getPostId(id)

      if(post.length === 0) {
        throw new InvalidPost()
      }
      return post
    }
```

<h4 align="right"><a href="#topo">Topo</a></h4>

### postController.ts

```sql
    public getPostId = async (req: Request, res: Response) => {
      try {
        const id = req.params.id;
        const postBusiness = new PostBusiness();
          const post = await postBusiness.getPostId(id);
          
          res.status(200).send({post})
      } catch (error:any) {
        res.status(400).send(error.message);
      }
    }
```
### postRouter.ts
```sql
postRouter.get("/:id", postController.getPostId);
```
    Ao passar o id de um post, você deve obter as informações a respeito daquele post
    
<h4 align="right"><a href="#topo">Topo</a></h4>

**Endpoints a se criar:**

<h2 id="famizade">- 4. Fazer amizade</h2>
    
    Criar uma amizade é simples: basta receber o Id do usuário com o qual se deseja fazer amizade. 
    
    Uma amizade é uma "relação mútua": quando um usuário vira amigo de outro, esse outro "já é amigo" desse primeiro usuário (ou seja, o segundo usuário não precisa virar amigo do outro depois)
    
    **Não há a necessidade de "aceitar" uma amizade.**

### amityDatabase.ts
```sql
import { amity } from '../model/amity';
import { BaseDatabase } from './BaseDatabase';

export class AmityDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_amity";

    public insertAmity = async (userId: string, friendId:string): Promise<void> => {
        try {            
             await AmityDatabase
             .connection
             .insert({
                user_id: userId,
                friend_id: friendId
             })
             .into(AmityDatabase.TABLE_NAME)
             await AmityDatabase
             .connection
             .insert({
                user_id: friendId,
                friend_id: userId
             })
             .into(AmityDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
            
        }
    
    }

    public delAmity = async (userId: string, friendId:string): Promise<void> => {
        try {            
             await AmityDatabase
             .connection
             .delete()
             .where({
                user_id: userId,
                friend_id: friendId
             }).orWhere({
                user_id: friendId,
                friend_id: userId
             })
             .from(AmityDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
            
        }
    
    }
}
```
<h4 align="right"><a href="#topo">Topo</a></h4>

### amityBusiness.ts
```sql
import { AmityDatabase } from "../data/AmityDatabase"

export class AmityBusiness {
    public createAmity = async (
        userId: string, friendId:string
        ): Promise<void> => {
            try {
                const amityDatabase = new AmityDatabase()
                await amityDatabase.insertAmity(userId, friendId)
            } catch (error:any) {
                throw new Error(error.message)
                
            }
}

public deleteAmity = async (
    userId: string, friendId:string
    ): Promise<void> => {
        try {
            const amityDatabase = new AmityDatabase()
            await amityDatabase.delAmity(userId, friendId)
        } catch (error:any) {
            throw new Error(error.message)
            
        }
}

}
```
<h4 align="right"><a href="#topo">Topo</a></h4>

### amityController.ts
```sql
import { Request, Response } from "express";
import { AmityBusiness } from "../business/amityBusiness";

export class AmityController {
    public createAmity = async (
        req: Request,
        res: Response
        ) => {
            try {
                const{
                    userId,
                    friendId
                } = req.body;

                // Para criar amizade usando params e query
                // const userId = req.params.idUser;
                // const friendId = req.query.idFriend as string;

                const amity = new AmityBusiness();
                await amity.createAmity(userId, friendId);
                res.status(200).send("Amizade criada com sucesso");
            }catch (error:any) {
                res.status(400).send(error.message);
            }
        }

        public deletAmity = async (
            req: Request,
            res: Response
            ) => {
                try {
                    const userId = req.params.idUser;
                    const friendId = req.query.idFriend as string;
                    
                    const amity = new AmityBusiness();
                    await amity.deleteAmity(userId, friendId);
                    res.status(200).send("Amizade apagada com sucesso");
                }catch (error:any) {
                    res.status(400).send(error.message);
                }
            

    }
}
```
<h4 align="right"><a href="#topo">Topo</a></h4>

### amityRouter.ts
```sql
import express from 'express';
import { AmityController } from '../controller/amityController';

export const amityRouter = express.Router();

const amityController = new AmityController();

amityRouter.post("/create", amityController.createAmity);

// amityRouter.post("/:idUser", amityController.createAmity);

amityRouter.delete("/:idUser", amityController.deletAmity);
```

<h4 align="right"><a href="#topo">Topo</a></h4>
    
<h2 id="damizade">- 5. Desfazer Amizade
    
    Encerrar uma amizade segue o mesmo fluxo de fazer: com o id do usuário, já é possível realizar esse processo.

### amityDatabase.ts

```sql
public delAmity = async (userId: string, friendId:string): Promise<void> => {
        try {            
             await AmityDatabase
             .connection
             .delete()
             .where({
                user_id: userId,
                friend_id: friendId
             }).orWhere({
                user_id: friendId,
                friend_id: userId
             })
             .from(AmityDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
            
        }
    
    }
```

<h4 align="right"><a href="#topo">Topo</a></h4>

### amityBusiness.ts
```sql
public deleteAmity = async (
    userId: string, friendId:string
    ): Promise<void> => {
        try {
            const amityDatabase = new AmityDatabase()
            await amityDatabase.delAmity(userId, friendId)
        } catch (error:any) {
            throw new Error(error.message)
            
        }
}
```

<h4 align="right"><a href="#topo">Topo</a></h4>

### amityController.ts
```sql
        public deletAmity = async (
            req: Request,
            res: Response
            ) => {
                try {
                    const userId = req.params.idUser;
                    const friendId = req.query.idFriend as string;
                    
                    const amity = new AmityBusiness();
                    await amity.deleteAmity(userId, friendId);
                    res.status(200).send("Amizade apagada com sucesso");
                }catch (error:any) {
                    res.status(400).send(error.message);
                }
            

    }
```

### amityRouter.ts
```sql
amityRouter.delete("/:idUser", amityController.deletAmity);
```

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="deamizade">Observação: </h2>
     você deve retornar um erro caso o usuário tente desfazer uma amizade com alguém com quem não tem essa amizade registrada no banco!


### services/checkamity.ts

```sql
import { AmityDatabase } from "../data/AmityDatabase"

export async function CheckFriends(
    userId:string,
    friendId:string
    ):Promise<boolean>{
        
    const friendDB = await new AmityDatabase()

    const checkId = {
        userId,
        friendId
    }
    const check = await friendDB.find(checkId)

    if(!check[0]){
        return false
    }else{
        return true
    }
}
``` 

<h4 align="right"><a href="#topo">Topo</a></h4>

### AmityDatabase.ts
```sql
public find = async (
        req:AmityInputDTO
        ):Promise<any> =>{
        try {
            const findAmity = await AmityDatabase.connection
            .select("*")
            .where({user_id: req.userId, friend_id: req.friendId})
            .orWhere({user_id: req.friendId, friend_id: req.userId})
            .from(AmityDatabase.TABLE_NAME)

            return findAmity
        } catch (error:any) {
            throw new Error(error.message)
            }
}
```
<h4 align="right"><a href="#topo">Topo</a></h4>

### amityBusiness.ts

```sql
public deleteAmity = async (
    userId: string, friendId:string
    ): Promise<void> => {
        try {
       
        if (!userId || !friendId){
            const message = "todos os campos devem ser preenchidos"
            throw new Error(message)
        }
        const checkFriends = await CheckFriends(userId,friendId)

        if (!checkFriends){
            const message = "Esses usuarios não são amigos"
            throw new Error(message)
        }

            const amityDatabase = new AmityDatabase()
            await amityDatabase.delAmity(userId, friendId)
        } catch (error:any) {
            throw new Error(error.message)
            
        }
}
```

<h4 align="right"><a href="#topo">Topo</a></h4>


<h2 id="postsfriends">- 6. Ver todo o Feed</h2>
    
    O feed é composto por todos os posts dos amigos do usuário. Os posts devem ser retornado em ordem de criação: do mais recente ao mais antigo.

### AmityDatabase.ts

```sql
    public feed = async (
        req:friendFeedInput
        ):Promise<any> => {
        try {
            const getFeedsFriends = await AmityDatabase.connection
            .select("*")
            .from(AmityDatabase.TABLE_NAME)
            .leftJoin("labook_posts", "labook_amity.friend_id", "labook_posts.author_id")
            .where({user_id: req.idUser})
            .orderBy("labook_posts.created_at", "desc")
            .limit(5)
                        
            return getFeedsFriends

        } catch (error:any) {
            throw new Error(error.message)
            }
    }
```

<h4 align="right"><a href="#topo">Topo</a></h4>

### amityBusiness.ts

```sql
public feed = async (
    req:friendFeedInput
    ):Promise<any> => {
        try {
            if(!req){ 
            const message = "necessario id do usuario" 
            throw new Error(message)
        }
            const feed = await new AmityDatabase().feed(req)

            return feed
        } catch (error:any) {
            throw new Error(error.message)
        }
}
```

<h4 align="right"><a href="#topo">Topo</a></h4>

### controller.ts

```sql
public feedAmity = async (
            req: Request,
            res: Response
            ) => {
                try {
                    const {idUser} = req.params
                    const input:friendFeedInput = { idUser }

                    const getFeed = await new AmityBusiness()
                    .feed(input)
                    res.status(201).send(getFeed)
                } catch (error:any) {
                    res.status(400).send(error.message);
                }
    }
```

<h4 align="right"><a href="#topo">Topo</a></h4>

### amityRouter.ts

```sql
amityRouter.get("/feed/:idUser", amityController.feedAmity);
```

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="fdesafios">- 🏅 **Desafios**</h2>

<h2 id="paginar">- 11. Paginar Feed</h2>

        Altere o feed para que ele só exiba 5 posts por vez
### AmityDatabase.ts

```sql
    public feed = async (
        req:friendFeedInput
        ):Promise<any> => {
        try {
            const getFeedsFriends = await AmityDatabase.connection
            .select("*")
            .from(AmityDatabase.TABLE_NAME)
            .leftJoin("labook_posts", "labook_amity.friend_id", "labook_posts.author_id")
            .where({user_id: req.idUser})
            .orderBy("labook_posts.created_at", "desc")
            .limit(5)
                        
            return getFeedsFriends

        } catch (error:any) {
            throw new Error(error.message)
            }
    }
```

<h4 align="right"><a href="#topo">Topo</a></h4>

<h2 id="nfunciona">Não funciona</h2>

- 🏅 **Desafios**
    
    **Endpoints a se criar:**
    
    - 7. Ver apenas um tipo de post do Feed
        
        Esse endpoint deve receber um tipo ("normal" ou "evento") e retornar todos os posts que sejam do tipo especificado, não apenas os de amigos. Os posts devem ser retornados em ordem de criação: do mais recente ao mais antigo.
        
    - 8. Curtir Post
        
        Essa requisição deve receber somente o id do post e retornar uma mensagem de sucesso ou erro. Lembre-se de que um usuário não pode curtir o mesmo post duas vezes.
        
    - 9. Descurtir Post
        
        Essa requisição deve receber somente o id do post e retornar uma mensagem de sucesso ou erro. Lembre-se de que um usuário não pode descurtir um post que não tenha curtido
        
    - 10. Comentar Post
        
        Recebendo o id do post e mensagem do comentário, o endpoint deve funcionar sem problemas. Um usuário pode, se quiser, comentar mais de uma vez o mesmo post. 
        
<h4 align="right"><a href="#topo">Topo</a></h4>