const palindromes = function (string) {
    let straightString = string.replace(/[^\w]/g, "").toLowerCase(); //quita espacios y puntuaciones y lo pone en minúsculas
    reverseString = straightString.split('').reverse().join(''); // pasa de string a array, lo invierte y lo vuelve a string
    return straightString === reverseString; // onliner de lo de abajo
    // if(justLetters === reverseString) {
    //     return true;
    // } else {
    //     return false;
    // }
};

// Do not edit below this line
module.exports = palindromes;