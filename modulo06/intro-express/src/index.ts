import express , { Response, Request } from 'express';
import cors from "cors";



type User = {
    id: number | string,
    name: string,
    phone:number | string,
    email:string,
    website:string,
    posts: Post[]    
}

type Post = {
    id: number | string,
    title: string,
    body: string,
    userID:number | string
}

const usuarios: User[] =[
    {
        id: 1,
        // Optei por colocar dentro da array de usuários, pois quando puxo no postman ele já me trás os posts junto com o respectivo usuário.
        posts: [
            {
                id:'28e07ef5-4c6f-4478-9998-1fae4c6d4745',
                title:"tentando funfar a bagaça",
                body:"teste1",
                userID:1
            }
            ],
        name: "Ricardo Ribeiro",
        phone:+5535991346134,
        email: "rickhard@bol.com.br",
        website:'www.bol.com.br'    
    },
    {
        id: 2,
        posts: [
            {
                id:'8b4215f1-950b-4c06-bfd6-80c2f8d1bc49',
                title:"Será que vai funfar",
                body:"teste2",
                userID:2
            }
            ],
        name: "Andersson Silva",
        phone:+5535984488844,
        email: "thedoor@bol.com.br",
        website:'www.uol.com.br'    
    },
    {
        id: 3,
        posts: [
            {
                id:'8b4215f1-950b-4c06-bfd6-80c2f8d1cc08',
                title:"Se funfar ta bom",
                body:"teste3",
                userID:3
            }
            ],
        name: "Minaíde Simões",
        phone:+5535981886621,
        email: "pequenina@bol.com.br",
        website:'www.globo.com.br'    
    },
]

const app = express();

app.use(express.json());
app.use(cors())


app.get("/", (req: Request, res:Response) => {          
    res.send("Hello from Express!!");
})

const usuarioURL = "/usuarios"
app.get(usuarioURL, (req: Request, res:Response) => {          
    res.send(usuarios);
})

//
const postsURL = "/posts"
app.get(postsURL, (req: Request, res:Response) => {          
    const posts = usuarios.map((usuarios) => {
        return usuarios.posts
    }).flat(1)
    res.send(posts);
})

const postURL = "/posts/:userID";
app.get(postURL, (req: Request, res:Response) => {
    const userID = Number(req.params.userID)

    const posts = usuarios.map((usuarios) => {
        return usuarios.posts
    }).flat(1)
    
    const postUser = posts.filter((post)=> post.userID === userID)

    res.send(postUser);
})
app.listen(3003, () => {
    console.log("Agora está funcionando!!")
})

