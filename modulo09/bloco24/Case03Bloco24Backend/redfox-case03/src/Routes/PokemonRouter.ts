import express from 'express';
import { PokemonDatabase } from '../Data/PokemonDatabase';
import {PokemonBusiness } from '../Business/PokemonBusiness';
import { PokemonController } from '../Controller/PokemonController';


export const routerPokemon = express.Router()

const userBusiness = new PokemonBusiness(
  new PokemonDatabase() 
)

const userController = new PokemonController(userBusiness);

routerPokemon.get('/getpoke', userController.getListings)
routerPokemon.get('/searchPoke', userController.searchPokemon)
routerPokemon.get('/page', userController.getPokePage)
routerPokemon.get('/filters', userController.getFilterByOrder)