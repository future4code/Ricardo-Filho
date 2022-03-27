const nameUser: string = process.argv[2]
const dateUser: string = process.argv[3]

function detailsUser(name: string, dateUser: string): string {
    type date = {
        day: number,
        month: number | string,
        year: number
    }

    enum months {
        JANEIRO = "JANEIRO",
        FEVEREIRO = "FEVEREIRO",
        MARCO = "MARÇO",
        ABRIL = "ABRIL",
        MAIO = "MAIO",
        JUNHO = "JUNHO",
        JULHO = "JULHO",
        AGOSTO = "AGOSTO",
        SETEMBRO = "SETEMBRO",
        OUTUBRO = "OUTUBRO",
        NOVEMBRO = "NOVEMBRO",
        DEZEMBRO = "DEZEMBRO"
    }
    const splitDate: string[] = dateUser.split("/") //onde tem barra ele separa
    
    const userDateSplit: date = {
        day: Number(splitDate[0]),
        month: Number(splitDate[1]),
        year: Number(splitDate[2])
    }

    switch (userDateSplit.month){
        case 1:
            userDateSplit.month = months.JANEIRO
        break
        case 2:
            userDateSplit.month = months.FEVEREIRO
        break
        case 3:
            userDateSplit.month = months.MARCO
        break
        case 4:
            userDateSplit.month = months.ABRIL
        break
        case 5:
            userDateSplit.month = months.MAIO
        break
        case 6:
            userDateSplit.month = months.JUNHO
        break
        case 7:
            userDateSplit.month = months.JULHO
        break
        case 8:
            userDateSplit.month = months.AGOSTO
        break
        case 9:
            userDateSplit.month = months.SETEMBRO
        break
        case 10:
            userDateSplit.month = months.OUTUBRO
        break
        case 11:
            userDateSplit.month = months.NOVEMBRO
        break
        case 12:
            userDateSplit.month = months.DEZEMBRO
        break
    }
    return `"Olá me chamo ${name}, nasci no dia ${userDateSplit.day} do mês de ${userDateSplit.month} do ano de ${userDateSplit.year}" `
}
console.log(detailsUser(nameUser, dateUser));
