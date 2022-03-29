//a)  Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
//Entrada é uma array de numeros.

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

const obterEstatisticas: (numeros: number[])=> Estatisticas = (numeros) => {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.table(obterEstatisticas([51, 40, 26, 9]));


//b) const numerosOrdenados: number[] / let soma: number / const estatisticas: Estatisticas(Aliases)

//c) Crie um type chamado amostra de dados, isto é, um objeto com as propriedades numeros e obterEstatisticas. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

type AmostraDeDados = {
    numeros: number,
    obterEstatisticas: (numberos: number[]) => Estatisticas
}

