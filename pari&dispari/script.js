


let scegli = prompt(" pari o dispari?");
console.log(scegli);

let utente = parseInt(prompt("metti un numero da 1 a 5")) ;
console.log(utente)

let utente2 = parseInt(Math.floor((Math.random()*5)+1)) ;
console.log(utente2)


function somma( num1, num2){

    let totale = num1 + num2;
    return totale;

}
let risultato = somma( utente, utente2);
console.log(risultato);

if(risultato % 2 == 0){
    alert(risultato + " ha vinto pari")
}else{
    alert(risultato + " ha vinto dispari")
}
