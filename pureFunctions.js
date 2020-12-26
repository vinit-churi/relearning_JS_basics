let array = [1, 2, 3];
console.log(array);

function addElementToArray(array, element) {
  return [...array, element];
}

console.log(addElementToArray(array, 34));
