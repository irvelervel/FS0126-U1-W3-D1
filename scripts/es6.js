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

// SPREAD OPERATOR --> ...
// lo spread operator serve a effettuare una COPIA di proprietà/elementi da una sorgente ad una destinazione

let a = 5
let b = a // "b vale 5"
a = 10
console.log(b) // ????? 5

// ora facciamo lo stesso esempio, ma con entità COMPLESSE

let objA = { value: 5 }
let objB = objA // questa riga NON duplica l'oggetto!

objA.value = 10
console.log(objB.value) // ?????? 10
// in soldoni: quando si tratta di dati PRIMITIVI (come a e b, che erano numeri) con l'operatore =
// JS crea una VERA COPIA della variabile
// quando però utilizziamo l'operatore = per creare una copia di un'entità COMPLESSA, JS non DUPLICA
// l'oggetto/array! crea semplicemente un nuovo "puntatore" per accedere alla stessa locazione di memoria

// PER CREARE OBJA e OBJB IN MODO SEPARATO, SCOLLEGATO NON POSSIAMO RICORRERE A objB = objA (come avremmo
// fatto con le variabili primitive!)

// creiamo ora una VERA COPIA di entità complesse tramite lo SPREAD OPERATOR

const objectA = { value: 5 }
const objectB = { ...objectA } // ho creato un nuovo "guscio" con le graffe e ci ho trasportato dentro
// una copia di TUTTE le proprietà di objectA grazie allo SPREAD OPERATOR ...
// ora objectA e objectB sono due oggetti SEPARATI in memoria!

// sintassi alternativa allo spread operator per creare una VERA COPIA di objectA
// utilizzando il metodo --> Object.assign({}, objectA)

// a questo punto posso modificare objectA SENZA condizionare il valore di objectB
objectA.value = 10
console.log(objectB.value) // 5

const arrA = [5, 6, 7]
const arrB = [...arrA] // VERA COPIA

arrA.push(8) // la length di A ora è 4
console.log(arrB.length) // 3

// OBJECT DESTRUCTURING ("destrutturazione di oggetti")

const cantautore = {
  firstName: 'Al',
  lastName: 'Bano',
  age: 100,
}

// ora vogliamo salvare in variabili separate il nome, cognome, età di Al Bano

// const firstName = cantautore.firstName
// const lastName = cantautore.lastName
// const age = cantautore.age

// l'OBJECT DESTRUCTURING ci fornisce una scorciatoia per recuperare proprietà da un oggetto
// e creare allo stesso momento delle variabili con lo stesso nome
const { firstName, lastName, age } = cantautore
// const firstName = cantautore.firstName
// const lastName = cantautore.lastName
// const age = cantautore.age

const nome = cantautore.firstName
// const firstName = cantautore.firstName

const characters = [
  {
    realName: 'Luke Skywalker',
    height: 172,
    mass: 277,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    realName: 'Darth Vader',
    height: 202,
    mass: 136,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
]

// console.log(
//   'Mi chiamo ' +
//     character.name +
//     ', i miei occhi sono ' +
//     character.eye_color +
//     ', sono nato nel ' +
//     character.birth_year,
// )

// const { realName, eye_color, birth_year } = characters[0]

const realName = characters[0].realName

console.log(
  'Mi chiamo ' +
    realName +
    ', i miei occhi sono ' +
    eye_color +
    ', sono nato nel ' +
    birth_year,
)

const realName2 = characters[1].realName

// parliamo di stringhe...
// in JS ci sono 2 delimitatori di stringhe: "" e ''
const str1 = 'ciaone!'

const str2 =
  "Si utilizzano entrambi quando in una stringa dovete inserire un apostrofo... l'albero"

//   però in realtà c'è un TERZO MODO: i BACKTICKS ``
const str3 = `Il backtick è un altro modo per delimitare le stringhe... ma ha UN superpotere!`

const myFirstName = 'Stefano'
const myLastName = 'Casasola'

const giveMeText = () => 'Io sono del testo!'

const message =
  'Il mio nome è ' + myFirstName + ' e il mio cognome è ' + myLastName
// 'Il mio nome è Stefano e il mio cognome è Casasola'

const betterMessage = `Il mio nome è ${myFirstName}
e il mio cognome è ${myLastName}`

const aVeryLongText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus praesentium impedit ut
  ducimus officia nemo labore laboriosam, ipsum a soluta in? Expedita exercitationem mollitia quod
  hic nemo iste earum? "Lorem" ipsum dolor sit, amet consectetur adipisicing elit. Quia nihil ut
  suscipit voluptatibus eaque magnam, ${myFirstName} optio laborum qui ipsum fugit rerum voluptate vel dolorum,
  cumque cupiditate tempora, distinctio perspiciatis sequi? Lorem ipsum dolor sit, amet consectetur
  adipisicing elit. Nemo explicabo 'adipisci' recusandae facilis iure ${myLastName} nostrum accusantium, veniam quam
  quibusdam at ipsum error vel laudantium? Sed aspernatur rem magni. Nesciunt, veritatis. Lorem ipsum
  dolor sit ${giveMeText()} amet consectetur adipisicing elit. Delectus molestiae adipisci quas accusantium non sapiente
  a quae ratione cumque at! Eveniet quaerat unde, excepturi molestiae sint eum inventore deleniti quia!`

// concludiamo il capitolo stringhe con un recap dei metodi delle stringhe:

const unaStringa = 'EPICODE vi insegna ad utilizzare il cervello!'

unaStringa.toUpperCase() // 'EPICODE VI INSEGNA AD UTILIZZARE IL CERVELLO!'
unaStringa.toLowerCase() // 'epicode vi insegna ad utilizzare il cervello'
unaStringa.slice(0, 10) // 'EPICODE vi' // include I PRIMI 10 CARATTERI
unaStringa.slice(11, 18) // 'insegna'
unaStringa.charAt(2) // 'I' -> il TERZO carattere della stringa (che ha indice 2, come negli array!)
unaStringa.charAt(20) // 'd' -> il DICIANNOVESIMO carattere della stringa (che ha indice 2, come negli array!)
unaStringa.split(' ') // crea un array separando i caratteri ogni volta che trova uno spazio
// -> ['EPICODE', 'vi', 'insegna', 'ad', 'utilizzare', 'il', 'cervello!']

unaStringa.split('i') // ['EPICODE v', ' ', 'nsegna ad ut', 'l', 'zzare ', 'l cervello!']

const arrayOfWords = unaStringa.split(' ')
const arrayIniziali = []

for (let i = 0; i < arrayOfWords.length; i++) {
  // i è un valore da 0 a 6, questo ciclo frulla 7 volte!
  // ogni parola è arrayOfWords[i]
  // ogni iniziale di ogni parola è arrayOfWords[i].slice(0,1)
  // la pusho nell'arrayIniziali
  arrayIniziali.push(arrayOfWords[i].slice(0, 1))
}

console.log(arrayIniziali) // ['E', 'v', 'i', 'a', u', 'i', 'c']

// startsWith(), endsWith(), includes() sono metodi delle stringhe che ritornano BOOLEANI!
const course = 'EPICODE'
course.startsWith('EPIC') // true
course.endsWith('ODE') // true
course.endsWith('EPI') // false
course.includes('CO') // true
course.includes('GI') // false

course.charAt(0) // 'E' -> torna il carattere alla posizione richiesta
course.indexOf('E') // 0 -> è l'INVERSO di charAt, torna la posizione in cui compare per la prima volta il carattere richiesto

// METODI DEGLI ARRAY
// Un array è una struttura dati complessa in JS che memorizza diversi elementi all'interno di una singola
// variabile; gli elementi (a differenza degli oggetti) NON sono "etichettati" con una chiave, ma il fattore
// che li differenzia è solamente la loro POSIZIONE all'interno dell'array: c'è il PRIMO elemento dell'array
// il SECONDO, il TERZO e così via. La loro posizione (detta anche INDICE) si comincia a contare da ZERO.

const myArrayOfBeautifulPets = ['tarantula', 'salamander', 'alligator', 'furby']
myArrayOfBeautifulPets.push('ralph') // aggiunge alla fine dell'array
myArrayOfBeautifulPets.pop() // elimina l'ultimo elemento
myArrayOfBeautifulPets.unshift('cobra') // aggiunge all'inizio dell'array
myArrayOfBeautifulPets.shift() // rimuove il primo elemento

// per aggiungere o rimuovere in mezzo all'array dobbiamo utilizzare SPLICE()
// per inserire un elemento tra la salamandra e l'alligatore
myArrayOfBeautifulPets.splice(2, 0, 'anaconda') // dalla posizione DUE, tolgo ZERO, aggiungo 'anaconda'
myArrayOfBeautifulPets.splice(2, 1) // dalla posizione DUE, tolgo UNO (l'anaconda di prima)
// sono tornato all'array iniziale!

// una proprietà degli array che usiamo spesso è la LENGTH -> lunghezza, pari al NUMERO degli elementi
myArrayOfBeautifulPets.length // 4
// ricordiamoci sempre che il primo elemento di un qualsiasi array ha indice 0
// ricordiamoci sempre che l'ultimo elemento di un qualsiasi array ha indice length-1

// ci siamo resi conto scorsa settimana che il ciclo FOR è uno strumento PERFETTO per ESPLORARE gli ARRAY!
// se noi facciamo un FOR con una i che comincia da 0 e finisce PRIMA di raggiungere la length
// di una array, otteniamo SEMPRE una i che è un INDICE VALIDO per quell'array!

for (let i = 0; i < myArrayOfBeautifulPets.length; i++) {
  // la i varrà nelle varie iterazioni del for: 0 - 1 - 2 - 3
  // quindi è sempre un NUMERO, ma rappresenta anche un indice valido per un elemento di myArrayOfBeautifulPets
  console.log(i) // 0 - 1 - 2 - 3
  console.log(myArrayOfBeautifulPets[i]) // 'tarantula' - 'salamander' - 'alligator' - 'furby'
}

// NUOVI METODI DEGLI ARRAY, INTRODOTTI CON ES6
// forEach(), map(), filter(), reduce()
