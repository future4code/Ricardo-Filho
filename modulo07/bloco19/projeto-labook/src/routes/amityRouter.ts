import express from 'express';
import { AmityController } from '../controller/amityController';

export const amityRouter = express.Router();

const amityController = new AmityController();

amityRouter.post("/create", amityController.createAmity);

// amityRouter.post("/:idUser", amityController.createAmity);

amityRouter.delete("/:idUser", amityController.deletAmity);

amityRouter.get("/feed/:idUser", amityController.feedAmity);