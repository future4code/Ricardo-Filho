import { Request, Response } from "express";
import { AmityBusiness } from "../business/amityBusiness";
import { friendFeedInput } from "../model/amity";

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
}