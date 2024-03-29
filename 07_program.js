const firstPromise = first();

const secondPromise = firstPromise.then(function (val) {
  return second(val);
});

secondPromise.then(console.log);

// As an alternative to the code above, you could also do this:
// first().then(second).then(console.log);
