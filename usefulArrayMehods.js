const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Bike", price: 300 },
  { name: "Book", price: 400 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 600 },
  { name: "Keyboard", price: 700 },
];

const fileterdItems = items.filter((item) => {
  return item.price >= 500;
});

console.log(fileterdItems);

const mappedItems = items.map((item) => {
  return item.name + "-reused";
});

console.log(mappedItems);

const findItems = items.find((item) => {
  return item.name === "Book";
});

console.log(findItems);

items.forEach((item) => {
  console.log(item.name);
});

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 500;
});

console.log(hasInexpensiveItems);

const onlyHasInexpensiveItems = items.every((item) => {
  return item.price <= 500;
});

console.log(onlyHasInexpensiveItems);

const total = items.reduce((currentTotal, item) => {
  //   console.log(item.price);
  return item.price + currentTotal;
}, 0);

console.log(total);

const numbers = [1, 2, 3, 4, 5];

const includesTwo = numbers.includes(2);
const includesBook = items.includes("Book");
const includesObjest = items.includes({ name: "Keyboard", price: 700 });

console.log(
  `number is included ${includesTwo} book is included ${includesBook} object is included ${includesObjest}`
);
