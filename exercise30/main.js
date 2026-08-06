function operate (a,b, callback) {

  return callback(a,b)

}

function add(a,b) {

  return a + b;

}

function substract(a,b) {
  return a - b;
}

function multiply(a,b) {
  return  a * b;
}


function divide(a,b) {
  return a / b;
}


console.log("addition: ", operate(3,5 ,add));

console.log("substract: ", operate(3,5 , substract))
console.log("multiply: ", operate(3,5 , multiply));
console.log("divide: ", operate(3,5 , divide));