const fibonacci = function (num) {
    let selection = num;
    let sequence = [1, 1];

    if (selection < 0) return "OOPS";

    for (let i = 2; i < selection; i++) {
        let newNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(newNumber);
    }
    return sequence[selection - 1];
};

// Do not edit below this line
module.exports = fibonacci;
