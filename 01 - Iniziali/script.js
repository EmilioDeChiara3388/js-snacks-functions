/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function initialNameArray (array){
    newArray = [];
    for (let i = 0; i < array.length; i++){
        const firstLetter = array[i][0];
        console.log(firstLetter);
        newArray.push(firstLetter);
    }

    return newArray;

}

// Invoca la funzione qui e stampa il risultato in console

console.log(initialNameArray(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]