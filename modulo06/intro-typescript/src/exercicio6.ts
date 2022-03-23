let number1 = Number(process.argv[2])
let number2 = Number(process.argv[3])

function operacao():void {
  let soma: number = number1 + number2;
  console.log(`A soma dos numeros ${number1} + ${number2} é:`, soma);

  let subt: number = number1 - number2
   console.log(`A subtração dos numeros ${number1} - ${number2} é:`, subt);

  let mult: number = number1 * number2
  console.log(`A multiplicação dos numeros ${number1} * ${number2} é:`,mult);
  
  let maior: boolean = number1 > number2
    
  if(maior){
    console.log(`o numero ${number1} é maior que ${number2}`)
   } else {
     console.log(`o numero ${number2} é maior que ${number1}`)
   }
  }
  operacao()

