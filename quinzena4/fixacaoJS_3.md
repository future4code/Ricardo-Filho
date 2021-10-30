```
function calculaNota(ex, p1, p2){

let pesoP1 = 2;
let pesoP2 = 3;

let notaDois = p1 * pesoP1
let notaTres = p2 * pesoP2
let notaTotal = ex + notaDois + notaTres

let mediaPond =  notaTotal / 6

if (mediaPond >= 9){ nota = "A"}
else if(mediaPond < 9 && mediaPond >= 7.5){nota = "B"}
else if(mediaPond < 7.5 && mediaPond >= 6){ nota = "C"}
else if(mediaPond < 6){nota = "D"}
return nota
}
```