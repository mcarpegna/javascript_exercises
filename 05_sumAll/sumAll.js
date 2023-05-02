const sumAll = function(firstNum, lastNum) {
    if (firstNum > lastNum) {
        [firstNum, lastNum] = [lastNum, firstNum];
    } 
    
    let sum = 0;
    
    if (firstNum >= 0 && typeof firstNum === "number" && typeof lastNum === "number") {

        for (let i = firstNum; i <= lastNum; i++) {              
            sum += i;

        } 
    } else {  
        return "ERROR";
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
