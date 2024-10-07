/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function initialNameArray (names){
    newArray = [];
    for (let i = 0; i < names.length; i++){
        const firstLetter = names[i][0];
        const okName = names [i];
        console.log(firstLetter);
        if (firstLetter === "A")
        newArray.push(okName);
    }

    return newArray;

}




// Invoca la funzione qui e stampa il risultato in console

console.log(initialNameArray(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]