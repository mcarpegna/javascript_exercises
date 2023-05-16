const add = function(a, b) {
  return a+b;	
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
  let total = 0;
	array.forEach(element => {
    total += element;
  });
  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach(element => {
    total *= element;
  })
  return total;
};

const power = function(num, pow) {
  total = 1;
	for (let i = 1; i <= pow; i++) {
    total = total * num;
  };
  return total;
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  } else {
    total = 1;
    for (let i = num; i >= 1; i--) {
      total *= i;
    };
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
