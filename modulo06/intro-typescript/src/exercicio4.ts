let num1: number = Number(process.argv[2])
let num2: number = Number(process.argv[3])

function comparaDoisNumeros(): number{
    let maiorNumero: number;
    let menorNumero: number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca: number = maiorNumero - menorNumero;
  
    return diferenca 
  }
  console.log(`a diferença entre os numeros ${num1} e ${num2} é: `,comparaDoisNumeros())