//chiedere ad utente di scrivere una parola palindroma


const parolaUtente = prompt("scrivi un parola");
// console.log(parolaUtente);


 //trasformiamo la parola inserita in un array
 let arrayParUtente = parolaUtente.split("");
 console.log(arrayParUtente)


 //invertiamo gli array

 arrayParUtente = arrayParUtente.reverse("");
 console.log(arrayParUtente)


 //trasformo array in stringa al contrario

  let parolaRev = arrayParUtente.join("");
  console.log(parolaRev);


  //confronto che parola inserita e parola inserita al contrario siano uguali

 if(parolaUtente === parolaRev){
      alert("la tua parola è palindroma")
  }else{
      alert("la tua parola non è palindroma")
  }



