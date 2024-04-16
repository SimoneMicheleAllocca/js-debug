/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
// 1. questo codice dovrebbe stampare i numeri da 0 a 5
// 2. ci sono errori di sintassi cioè: i>5. Siccome è sempre false non darà l'output richiesto. Si dovrebbe usare i <=



// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
// 1. questa funzione aggiunge 5 se il numero è pari altrimenti restituisce il numero ScriptProcessorNode
// 2. l'errore di sintassi è l'uso di = invece di ===

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
// 1. questa funzione dovrebbe contare fino a 5
// 2. l'errore è l'uso dell , invece dei ; e di < invece di <=

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 1. questa funzione dovrebbe darci un array contentente i numeri pari
// 2. gli errori sono:
        // - l'uso di = invece di === nella condizione di if
        // - l'uso di return nel ciclo for e quindi la chiusura del ciclo, restituendo solo il primo numero
        // - l'uso di i < numbers.length - 1 invece di i < numbers.length
        // - invece di numbers % si dovrebbe usare numbers[1]
         // - invece di evenNumbers.push(i); si dovrebbe usare evenNumbers.push(numbers[i])
            