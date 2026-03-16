// ES6 è stata una delle revisioni di JS che più ha influenzato la stesura moderna del codice.
// Ha introdotte della sintassi e delle pratiche che utilizziamo ancora oggi, rivediamo le cose
// che già conosciamo e introduciamo qualche scorciatoia o nuova tecnica che ci possono venire
// utili nel quotidiano.

// VARIABILI
// let e const creano delle varibiabili con visibilità di BLOCCO (quindi non si possono utilizzare
// prima della loro dichiarazione, e non sono raggiungibili al di fuori del blocco di codice in
// cui sono state dichiarate)

let myNumber = 100 // visibilità più "globale" perchè non è dichiarata in un blocco di graffe

if (myNumber > 10) {
  myNumber = 200
  let anotherNumber = 0 // visibilità solo all'interno di questo if
}

// anotherNumber = 100 // <-- non si riferisce alla variabile della riga 15 perchè è irraggiungibile!

// inoltre ES6 ha introdotto una maniera di dichiarare delle variabili NON riassegnabili: const

// FUNZIONI
// in JS, nel corso degli anni ci sono stati DIVERSI modi di dichiarare le funzioni:
// - metodo obsoleto -> funzioni dotate di nome utilizzando la parola chiave "function"
console.log('ecco il mio messaggio: ' + saluta()) // "ecco il mio messaggio: Ciao Stefano!"

function saluta() {
  return 'Ciao Stefano!'
}

// - metodo moderno e corretto -> funzioni ANONIME dichiarate con la parola function e assegnate a COSTANTE
// console.log('ecco il mio messaggio: ' + salutami()) // <-- dà errore!

const salutami = function () {
  return 'Ciao Stefano!'
}

console.log('ecco il mio messaggio: ' + salutami()) // <-- invocazione corretta, DOPO la dichiarazione!

// NOVITÀ: esiste un TERZO modo per dichiarare le funzioni in JS! le ARROW FUNCTIONS (funzioni freccia)

const moltiplicaPerCinque = (n1) => {
  return n1 * 5
}

// BUT WAIT, THERE'S MORE!
// se una funzione freccia:
// - è monoriga
// - fa un return
// ----> SI PUÒ ULTERIORMENTE ACCORCIARE! SI TOGLIE LA PAROLA RETURN + SI TOLGONO LE GRAFFE
const moltiplicaAccorciata = (n1) => n1 * 5

moltiplicaAccorciata(5) // torna il numero 25

const salutamiBrevemente = () => 'Ciao Stefano'
// equivalente a:
const salutamiLungamente = function () {
  return 'Ciao Stefano'
}

// NB: le parole riservate "this" e "super" funzionano in modo leggermente diverso nelle funzioni freccia

// NB2: se decidete di usare una funzione freccia e volete solo ritornare un valore, dovete omettere
// SIA le graffe SIA la parola "return"! esempio:
const salutala = () => {
  'Ciao Hina!' // <-- NON STO RITORNANDO 'Ciao Hina!'
}
