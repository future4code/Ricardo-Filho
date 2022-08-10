import { Request, Response } from 'express';
import { PokemonBusiness } from '../Business/PokemonBusiness';
import { BaseDatabase } from '../Data/BaseDatabase';

export class PokemonController {

  constructor(
    private userBusiness: PokemonBusiness
) { }

getListings = async (req: Request, res: Response) => {
    try {

        const result = await this.userBusiness.getListings()

        res.status(201).send(result)

    } catch (error: any) {
        const { code, message } = error
        res.status(code || 400).send({ message });
    }

    await BaseDatabase.destroyConnection();
}

searchPokemon = async (req: Request, res: Response) => {
    try {

        const PokeName = req.query.Name as string

        const search = await this.userBusiness.searchPokemon(PokeName)

        res.status(201).send(search)


    } catch (error: any) {
        const { code, message } = error
        res.status(code || 400).send({ message });
    }

    await BaseDatabase.destroyConnection();
}

getPokePage = async (req: Request, res: Response) => {
    try {
        const pagePoke = Number(req.query.page)

        const getPoke = await this.userBusiness.getPokePage(pagePoke)

        res.status(200).send(getPoke)

    } catch (error: any) {
        const { code, message } = error
        res.status(code || 400).send({ message });
    }
}

getFilterByOrder = async (req: Request, res: Response) => {
    try {

        let order = req.query.order as string
        let filter = req.query.filter as string

        const FilterByOrder = await this.userBusiness.getFilterByOrder(order, filter)

        res.status(200).send(FilterByOrder)

    } catch (error: any) {
        const { code, message } = error
        res.status(code || 400).send({ message });
    }
}

}