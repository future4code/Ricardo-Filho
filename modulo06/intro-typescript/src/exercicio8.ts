const stringRevert: (word: string) => string = (word) =>{
return word.split("").reverse().join("")
}
console.log(stringRevert("Labenu"))