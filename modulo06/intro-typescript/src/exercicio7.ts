const dnaConvert:(dna: string) => string = (dna) =>{
  let arrayDna: string[] = dna.split("")
  let arrayRna: string[] = arrayDna.map((item)=>{
    switch(item){
      case "A":
        return "U"
        break
      case "T":
        return "A"
        break
      case "C":
        return "G"
        break
      default:
        return "C"
        break
    }
  })
  return arrayRna.join("")
}
console.log(dnaConvert("ATTGCTGCGCATTAACGACGCGTA"))