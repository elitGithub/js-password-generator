const characterAmountRange = document.querySelector('#characterAmountRange');
const characterAmountNumber = document.querySelector('#characterAmountNumber');
const passwordGeneratorForm = document.querySelector('#password-generator');
const includeUpperCaseElement = document.querySelector('#includeUppercase');
const includeNumbersElement = document.querySelector('#includeNumbers');
const includeSymbolsElement = document.querySelector('#includeSymbols');
const displayPassword = document.querySelector('#display-password');

const UPPERCASE_CHAR_CODES = fromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = fromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = fromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = fromLowToHigh(33, 47)
    .concat(fromLowToHigh(58, 64))
    .concat(fromLowToHigh(91, 96))
    .concat(fromLowToHigh(123, 126));




characterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);
passwordGeneratorForm.addEventListener('submit', e => {
    e.preventDefault();
    characterAmount = characterAmountNumber.value;
    includeUpperCase = includeUpperCaseElement.checked;
    includeNumbers = includeNumbersElement.checked;
    includeSymbols = includeSymbolsElement.checked;
    displayPassword.innerText = generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols);;

})

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}

function generatePassword(characterAmount, includeUpperCase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if (includeUpperCase) {
        charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    }
    if (includeNumbers) {
        charCodes = charCodes.concat(NUMBER_CHAR_CODES);
    }
    if (includeSymbols) {
        charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    }
    let passwordCharacters = [];
    for (let i = 0; i <= characterAmount; i++) {
        randomIndex = Math.floor(Math.random() * charCodes.length)
        passwordCharacters.push(String.fromCharCode(charCodes[randomIndex]));
    }
    return passwordCharacters.join('');
}

function fromLowToHigh(low, high) {
    const charCodeArray =[];
    for (let i = low; i <= high; i++) {
        charCodeArray.push(i);
    }
    return charCodeArray;
}
