import { app } from './app'
import { routerPokemon } from "./Routes/PokemonRouter";

app.use("/pokemon", routerPokemon);
