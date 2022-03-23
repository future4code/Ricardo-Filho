function imprimeTresCoresFavoritas():void {
    const cor1: string = process.argv[2]
    const cor2: string = process.argv[3]
    const cor3: string = process.argv[4]
    console.table([`Sua primeira cor favorita é: ${cor1}`,
    `Sua segunda cor favorita e: ${cor2}`,
    `Sua terceira cor favorita e: ${cor3}`])
 }
 imprimeTresCoresFavoritas()