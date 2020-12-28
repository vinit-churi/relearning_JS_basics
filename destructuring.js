const Alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

const [a, b, , d, ...rest] = [...Alphabet];
console.log(a, b, d, rest);

const [e, f, , g, ...rests] = [...Alphabet, ...numbers];
console.log(e, f, g, rests);

function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

const [sum, multiple, division = "no division"] = sumAndMultiply(2, 3);
console.log(
  `sum is ${sum} multiple is ${multiple} and division is ${division}`
);

const personnOne = {
  name: "vinit",
  surname: "churi",
};

const personnTwo = {
  name: "sally",
  age: 32,
  address: {
    city: "Somewhere else",
    state: "Another one of them",
    street: "inner street",
  },
};

const { name, age } = personnTwo;
const { name: firstName, age: initialAge, favouriteFood = "rice" } = personnTwo;

console.log(
  `name : ${name} , age : ${age} , firstName: ${firstName}, initialAge: ${initialAge}`
);

const { name: lastName, ...restObj } = personnOne;

console.log(`name : ${lastName} , restObj: ${restObj}`);
console.log(restObj);

const {
  address: { street: destructgInner },
} = personnTwo;
console.log(destructgInner);

const personThree = { ...personnOne, ...personnTwo };
console.log(personThree);

function printUser({ name, age, favouriteGame = "basketBall player" }) {
  console.log(
    `name is ${name} age is ${age} favourite game is ${favouriteGame}`
  );
}

printUser(personThree);
