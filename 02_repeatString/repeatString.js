const repeatString = function(string, num) {
    if (num >= 0) {
        let resultString= '';
        for (let i = 1; i <= num; i++) {
            resultString += string; 
        }
        return resultString;
    
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = repeatString;
