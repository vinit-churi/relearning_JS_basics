let x = function () {
  console.log("I am called from inside a function");
};

let y = function (callback) {
  console.log("do something");
  callback();
};

let z = function () {
  console.log("do somehting in z");
  //   callback();
};

y(x);

// z(); // It dosent work if function is not passed as a parameter;

// practical example of the call back function
let add = function (a, b) {
  return a + b;
};

let multiply = function (a, b) {
  return a * b;
};

let divide = function (a, b) {
  return a / b;
};

let calc = function (a, b, callbck) {
  return callbck(a, b);
};

console.log(calc(6, 3, divide));
console.log(calc(6, 3, add));
console.log(calc(6, 3, multiply));
