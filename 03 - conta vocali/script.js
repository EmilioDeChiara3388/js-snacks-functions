/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels (string){
    let count = [];
    for (let i = 0; i < string.length; i++){
        const letters = string[i];
        console.log(letters);
        if (letters === "a" || letters === "e" || letters === "i" || letters === "o" || letters === "u")
        count.push(letters);
    }

    return count.length;
    
}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)