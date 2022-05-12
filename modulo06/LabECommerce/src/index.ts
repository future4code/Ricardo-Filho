import { app } from "./app";
import { postUsers } from "./endpoints/postUsers";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postProducts } from "./endpoints/postProducts";
import { selectAllProducts } from "./endpoints/getAllProducts";
import { regPurchases } from "./endpoints/regPurchases";
import { getPurchasesUser } from "./endpoints/getPurchasesUser";
import { orderAllProducts } from "./endpoints/getAllProductsOS";
import { getAllUsersPurchases } from "./endpoints/getAllUsersPurchases";



app.post("/users", postUsers)
app.get("/users", getAllUsers)
app.post("/products", postProducts)
app.get("/products", selectAllProducts)
app.post("/purchases", regPurchases)
app.get("/users/:userId/purchases", getPurchasesUser)
app.get("/product", orderAllProducts)
app.get("/users/purchase", getAllUsersPurchases)