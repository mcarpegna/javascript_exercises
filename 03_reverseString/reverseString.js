const reverseString = function(sentence) {
 
    let sentenceArray = sentence.split('');

    let reversedSentenceArray = [...sentenceArray].reverse();

    let sentenceReversed = reversedSentenceArray.join('');

    return sentenceReversed;

};

// Do not edit below this line
module.exports = reverseString;
