/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function countVowels (word){
    for (let i = 0; i <= word.length; i++){
        console.log(i);
        let count = 0;
        if (i === "a" && i === "e" && i === "i" && i === "o" && i === "u"){
            count++;
        }
        
    }

    return count;

}

// Invoca la funzione qui e stampa il risultato in console

console.log(countVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)