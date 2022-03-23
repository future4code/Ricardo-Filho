function checaTriangulo (a: number , b: number, c: number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }
  console.log(`A resposta para lados iguais ( lado a = 3, lado b = 3, lado c = 3)é : ${checaTriangulo(3, 3, 3)}`)
  console.log(`A resposta para lados diferentes ( lado a = 3, lado b = 2, lado c = 1)é : ${checaTriangulo(3, 2, 1)}`)
  console.log(`A resposta para 2 lados iguais ( lado a = 3, lado b = 3, lado c = 2)é : ${checaTriangulo(3, 3, 2)}`)