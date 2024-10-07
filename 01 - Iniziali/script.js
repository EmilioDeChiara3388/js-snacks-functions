/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initialNameArray (){
    for (let i = 0; i <= names.length; i++){
        let firstLetter = names[i][0];
        console.log(firstLetter);
    }
    return firstLetter;
}
let newArray = names.map(initialNameArray());
console.log(newArray);


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]