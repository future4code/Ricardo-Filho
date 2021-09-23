// --- EXERCÍCIO 1 -Resolva os passos a seguir: -----------------------------------------------------------------
    
    const tratativa = {
        nome: "Ricardo",
        apelidos: ["RickHard", " Papitos"," Ricardão da Mariah"]
    
    }
    const comoPodeMeChamar = (tratativa) => {
        console.log(`Olá eu sou o ${tratativa.nome}, mas pode me chamar de ${tratativa.apelidos}`)
    }
    comoPodeMeChamar(tratativa)

    const novosApelidos = {
        ...tratativa,
        apelidos: ["Gordito", " Rick", " Ogro"]
    }
    comoPodeMeChamar(novosApelidos)
    
// --- EXERCÍCIO 2 ------------------------------------------------------------------
    const euDev = {
        nome: "Ricardo",
        idade: 49,
        profissão: "T.I"
    }
    const esposa = {
        nome: "Minaíde",
        idade: 39,
        profissão: "Atendente"
    }
    const imprimeEuDev = (euDev) => {
        console.log([euDev.nome,euDev.nome.length,euDev.idade,euDev.profissão])
    }
    imprimeEuDev(euDev)

    const imprimeEsposa = (esposa) => {
        console.log([esposa.nome,esposa.nome.length,esposa.idade,esposa.profissão])
    }
    imprimeEsposa(esposa)
// --- EXERCÍCIO 3 ------------------------------------------------------------------
    const carrinho = []

    const frutas1 = {
        nome: "Mamão",
        disponilidade: true
    }
    const frutas2 = {
        nome: "Abacaxi",
        disponilidade: true
    }
    const frutas3 = {
        nome: "Laranja",
        disponilidade: true
    }
    const comprar = (fruta)=>{
        console.log(fruta)
        carrinho.push(fruta)
    }
    console.log(carrinho)
        comprar(frutas1)
        comprar(frutas2)
        comprar(frutas3)
    
     // --- Desafio 1 ------------------------------------------------------------------
    
      function imprimirPessoa(){
        let chamandoPessoa = {
            nome: prompt('Digite seu nome por favor'),
            idade: Number(prompt('Digite sua idade por favor')),
            profissao: prompt('Digite sua profissão por favor')
        }
            console.log(chamandoPessoa)                
            console.log(`Nome: ${chamandoPessoa.nome}, Profissão: ${chamandoPessoa.profissao}, Idade: ${chamandoPessoa.idade}`)
        }
        imprimirPessoa()

// --- Desafio 2 ------------------------------------------------------------------
function filmes(){
    let filme1 = {
        nome: prompt('Digite o nome de um filme'),
        lancamento: Number(prompt('Digite a data de lancamento')),        
    }
    let filme2 = {
        nome: prompt('Digite o nome de um outro filme'),
        lancamento: Number(prompt('Digite a data de lancamento')),    
    }
    console.log(filme1)                
    console.log(filme2)
    console.log(`O filme ${filme1.nome} foi lancado antes do ${filme2.nome}?`, filme1.lancamento < filme2.lancamento)
    console.log(`O filme ${filme1.nome} foi lancado no mesmo ano de ${filme2.nome}?`, filme1.lancamento == filme2.lancamento)
    }
    filmes()
