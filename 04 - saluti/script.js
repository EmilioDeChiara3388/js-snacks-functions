/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
function yourName(word){
    let greetings = `${"Ciao"} ${word}`;
    return greetings;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(yourName("Mario"));


//Risultato atteso se si passa 'Mario': // ciao Mario