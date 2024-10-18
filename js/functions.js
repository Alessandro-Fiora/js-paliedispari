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

/**
 * Returns a random integer number between two numbers
 * @param {Number} min Min number of the interval
 * @param {Number} max Min number of the interval
 * @returns {Number} a random integer number between min and max
 */
function randomNumberInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Checks if a number is a valid number and is between two values
 * @param {Number} num Number to check for validity
 * @param {Number} min Min possible value
 * @param {Number} max Max possible value
 * @returns {Boolean}
 */
function isNumberValid(num, min, max) {
  return !isNaN(num) && num >= min && num <= max ? true : false;
}
/**
 * Checks if a word is included in a list of words
 * @param {String} word Word to check for validity
 * @param {Array} whitelist Array of possible values
 * @returns {Boolean}
 */
function isWordValid(word, whitelist = []) {
  return whitelist.includes(word);
}
