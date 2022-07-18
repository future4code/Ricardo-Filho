function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
   for (let i = 0; i < listOfNumbers.length; i++) {
     if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
       return true;
     }
   }
   return false;
 }

 console.log(verifyIfExistRepeatedNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
 