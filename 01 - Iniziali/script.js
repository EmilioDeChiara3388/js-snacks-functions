/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function initialNameArray (names){
    for (let i = 0; i < names.length; i++){
        const firstLetter = names[i][0];
        console.log(firstLetter);
    }

}

console.log(initialNameArray(names));




// Invoca la funzione qui e stampa il risultato in console


const newArray = names.push(initialNameArray(names));
console.log(newArray);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]