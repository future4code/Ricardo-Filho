import { PokemonDatabase } from '../Data/PokemonDatabase';
import { BaseError } from '../Error/PokemonErrors';

export class PokemonBusiness {
  constructor(
    private pokemonData: PokemonDatabase,
) { }

getListings = async () => {
    return await this.pokemonData.SelectionList()
}

searchPokemon = async (Name: string) => {

    if (!Name) {
        throw new BaseError(422, "Missing input")
    }

    return await this.pokemonData.Search(Name.toLocaleUpperCase())
}

getPokePage = async (pagePoke: number) => {

    if (pagePoke > 5) {
        throw new BaseError(422, "page limit up to 5")

    }
    let page = pagePoke

    if (page < 1 || isNaN(page)) {
        page = 1
    }

    let size = 5

    let offset = (page - 1) * size

    const pokepage = await this.pokemonData.Page(size, offset)

    return pokepage
}

getFilterByOrder = async (order: string, filter: string) => {

    if (order !== 'asc' && order !== 'desc') {
        order = 'asc'
    }

    if (filter !== 'Name' && filter !== 'Type 1') {
        filter = 'Row'
    }

    const fibo = await this.pokemonData.FilterByOrder(order, filter)
    return fibo
}
}
