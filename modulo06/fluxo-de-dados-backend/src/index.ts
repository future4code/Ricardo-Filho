import express , { Response, Request } from 'express';
import cors from "cors";
import { Product, products } from "./data"
import {v4 as generateId} from "uuid";

const app = express();

app.use(express.json());
app.use(cors())

const Errors: { [chave: string]: {status: number, message: string} } = {
    BAD_REQUEST: {status:400, message:"Valores incorretos"},
    AUTHORIZATION_NOT_FOUND: {status: 401, message: "Favor enviar header authorization"},
    PRODUCT_NOT_FOUND: {status: 404, message: "Produto não encontrado"},
    PRODUCT_EXISTS: {status: 409, message: "Esse produto já existe"},
    MISSING_PARAMETERS: {status: 422, message: "Alguma informação está faltando. Consulte a documentação."},
    SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"},
}

//01) - Criar API e retornar que API esta funcionando

app.get("/test", (req: Request, res:Response) => {
    res.status(200).send("Api rodando...")
})

//03) - Criar Endpoint para create new product

app.post("/products/create", (req: Request, res:Response) => {
    try {
    const {name, price} = req.body;

    if (!name || !price) {throw Error(Errors.MISSING_PARAMETERS.message)
        return
    }
    if ( typeof price !== "number" || price <=0 || price === undefined) {throw Error(Errors.MISSING_PARAMETERS.message)
        return
    }
    if ( typeof name !== "string") {throw Error(Errors.MISSING_PARAMETERS.message)
        return
    }

    const productNew: Product = {
        id: generateId(),
        name:name,
        price: price
    }
    products.push(productNew);

    }catch(error: any) {
    switch(error.message) {
       case Errors.AUTHORIZATION_NOT_FOUND.message:
          res.status(Errors.AUTHORIZATION_NOT_FOUND.status).send(Errors.AUTHORIZATION_NOT_FOUND.message);
          break;
       case Errors.PRODUCT_NOT_FOUND.message:
          res.status(Errors.PRODUCT_NOT_FOUND.status).send(Errors.PRODUCT_NOT_FOUND.message);
          break;
       case Errors.MISSING_PARAMETERS.message:
          res.status(Errors.MISSING_PARAMETERS.status).end(Errors.MISSING_PARAMETERS.message);
          break;
       case Errors.PRODUCT_EXISTS.message:
          res.status(Errors.PRODUCT_EXISTS.status).send(Errors.PRODUCT_EXISTS.message);
          break;
       default:
          res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
    }
}
res.status(201).send(products)
})

//04) - Criar Endpoint para retornar todos os produtos

app.get("/products", (req: Request, res:Response) => {
    res.status(200).send(products)
})

//05) - Criar Endpoint para editar o price de um produto e retornar lista

app.put("/products/pricedit/:id", (req: Request, res:Response) => {
    try {
        const id = req.params.id
        const { price } = req.body
    
        const editPrice = products.find((idProduct) => idProduct.id === id)
        
        if( !editPrice ) {throw Error( Errors.PRODUCT_NOT_FOUND.message )}
        if( typeof price !== "number" || price <=0 ) {throw Error(Errors.BAD_REQUEST.message)}
        
        editPrice.price = Number(price)
         
    } catch(error: any) {
    switch(error.message) {
       case Errors.AUTHORIZATION_NOT_FOUND.message:
          res.status(Errors.AUTHORIZATION_NOT_FOUND.status).send(Errors.AUTHORIZATION_NOT_FOUND.message);
          break;
       case Errors.PRODUCT_NOT_FOUND.message:
          res.status(Errors.PRODUCT_NOT_FOUND.status).send(Errors.PRODUCT_NOT_FOUND.message);
          break;
       case Errors.MISSING_PARAMETERS.message:
          res.status(Errors.MISSING_PARAMETERS.status).end(Errors.MISSING_PARAMETERS.message);
          break;
       case Errors.PRODUCT_EXISTS.message:
          res.status(Errors.PRODUCT_EXISTS.status).send(Errors.PRODUCT_EXISTS.message);
          break;
       default:
          res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
    }
 }
 res.status(200).send("Preço alterado com sucesso")
    
})

//06) - 
app.delete("/products/:id", (req: Request, res: Response) => {
    try{
        const id=req.params.id;

        if(!id) {
            throw Error(Errors.PRODUCT_NOT_FOUND.message)    
            }
            console.log(id);

        products.forEach((item, Index, array) => {
            if(item.id === id) {
                products.splice(Index, 1)
            }
            return products
            })
          
    }catch ( error: any ) {
        switch ( error.message ) {
        case Errors.PRODUCT_NOT_FOUND.message:
        res.status(Errors.PRODUCT_NOT_FOUND.status).send(Errors.PRODUCT_NOT_FOUND.message);
        break;
        default:
            res.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
        }
    }
        res.status(200).send(products)
    }
    )
    

app.listen(3003, ()=> {
    console.log("Servidor Rodando...")   
})
