import express from 'express'
import { MovieController } from '../controller/MovieController'

export const movieRouter = express.Router()

const movieController = new MovieController()

movieRouter.post("/create", movieController.createMovie)

movieRouter.get("/All", movieController.getAll)

movieRouter.delete("/delete/:id", movieController.deleteMovie)