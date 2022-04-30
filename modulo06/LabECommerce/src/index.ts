import { app } from "./app";
import { postUsers } from "./endpoints/postUsers";// 1
import { getAllUsers } from "./endpoints/getAllUsers";//2
import { postProducts } from "./endpoints/postProducts";//3
import { selectAllProducts } from "./endpoints/getAllProducts";//4
import { regPurchases } from "./endpoints/regPurchases";//5
import { getPurchasesUser } from "./endpoints/getPurchasesUser";//6



app.post("/users", postUsers)//  1 - adicionar users - ok
app.get("/users", getAllUsers)// 2 - pegar todos os usuários - ok
app.post("/products", postProducts)// 3 - adicionar os produtos - ok
app.get("/products", selectAllProducts)// 4- pegar todos os produtos - ok
app.post("/purchases", regPurchases)// 5 - registrar as compras
app.get("/purchases", getPurchasesUser)// 6 - pegar as compras