const ano: number = Number(process.argv[2])
function checaAnoBissexto(): boolean {
    const cond1: boolean = ano % 400 === 0
    const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }
 console.log(`O ano ${ano} é bissexto?`, checaAnoBissexto())