// ^ Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// const userWord = prompt("Inserisci una parola per sapere se è palindroma");

// alert(
//   isPalindrome(userWord)
//     ? "La parola inserita è palindroma"
//     : "La parola inserita non è palindroma"
// );

// ^ Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// * Dati
minNumber = 1;
maxNumber = 5;

// * Parole accettate come input
const whitelist = ["pari", "dispari"];

// * Utente sceglie pari o dispari
let userChoice = prompt('Scegli "pari" o "dispari"');

// * Controllo validità parola e faccio re-inserire finchè non valida
while (!isWordValid(userChoice, whitelist)) {
  userChoice = prompt('Scelta non possibile!\nScegli "pari" o "dispari"');
}

// * Utente sceglie un numero
let userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));

// * Controllo validità numero e faccio re-inserire finchè non valido
while (!isNumberValid(userNumber, minNumber, maxNumber)) {
  userNumber = parseInt(
    prompt("Il numero inserito non è valido! \nScegli un numero da 1 a 5")
  );
}

// * Genero numero casuale per PC
const pcNumber = randomNumberInterval(minNumber, maxNumber);
