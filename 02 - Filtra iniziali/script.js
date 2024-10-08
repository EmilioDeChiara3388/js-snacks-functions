/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function initialNameArray (array){
    newArray = [];
    for (let i = 0; i < array.length; i++){
        const firstLetter = array[i][0];
        const okName = array [i];
        console.log(firstLetter);
        if (firstLetter === "A"){
            newArray.push(okName);
        }
        
    }

    return newArray;

}




// Invoca la funzione qui e stampa il risultato in console

console.log(initialNameArray(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]