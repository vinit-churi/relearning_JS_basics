// commit to do something
// either its resolved or returns a reject

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("Failed");
  }
});

// anything for .then is going to run for resolve
// anything for .catch is going to run for reject

p.then((message) => {
  console.log("this is the message " + message);
}).catch((message) => {
  console.log("this is the message " + message);
});
