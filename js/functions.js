/**
 * Returns true if the word is palindrome
 * @param {string} word word to check for palindrome
 * @returns {boolean} true for palindrome, false if not
 */
function isPalindrome(word) {
  // * Trasformo la parola in minuscolo
  word = word.toLowerCase();

  // * Genero un array con i caratteri della parola
  const wordArray = word.split("");

  // * Genero un array inverso con i caratteri della parola al contrario
  const wordArrayReversed = wordArray.toReversed();
  // console.log(wordArray, wordArrayReversed);

  // * Per ogni carattere dell'array della parola controllo che sia uguale al carattere corrispondente nell'array inverso
  for (let i = 0; i < wordArray.length; i++) {
    // console.log(wordArray[i], wordArrayReversed[i]);

    // * Se ne trovo uno diverso esco dal ciclo e ritorno FALSE
    if (wordArray[i] !== wordArrayReversed[i]) {
      return false;
    }
  }

  // * Se passo tutto il ciclo e arrivo qui, gli array hanno tutti i caratteri uguali, quindi ritono true
  return true;
}
