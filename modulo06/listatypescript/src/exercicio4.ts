type Colaborador = {
    nameUser: string,
    wage: number,
    sector: SECTOR,
    inPerson: boolean,
}

enum SECTOR {
    MARKETING = "marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro"
}

const colaboradores: Colaborador[] = [
    
        {
            nameUser: "Marcos",
            wage: 2500,
            sector: SECTOR.MARKETING,
            inPerson: true
        },
        {
            nameUser: "Maria",
            wage: 1500,
            sector: SECTOR.VENDAS,
            inPerson: false
        },
        {
            nameUser: "Salete",
            wage: 2200,
            sector: SECTOR.FINANCEIRO,
            inPerson: true
        },
        {
            nameUser: "João",
            wage: 2800,
            sector: SECTOR.MARKETING,
            inPerson: false
        },
        {
            nameUser: "Josué",
            wage: 5500,
            sector: SECTOR.FINANCEIRO,
            inPerson: true
        },
        {
            nameUser: "Natalia",
            wage: 4700,
            sector: SECTOR.VENDAS,
            inPerson: true
        },
        {
            nameUser: "Paola",
            wage: 3500,
            sector: SECTOR.MARKETING,
            inPerson: true
        }
    
]

const buscaColaborador: (colaboradores: Colaborador[]) => Colaborador[] = (
    colaboradores
) => {
    return colaboradores.filter((colaborador) => {
        return colaborador.sector === SECTOR.MARKETING && colaborador.inPerson === true;
})
}
console.table(buscaColaborador(colaboradores));
