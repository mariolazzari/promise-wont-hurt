const promise = Promise.resolve("Promise resolved");
promise.then(console.log);

const promise2 = Promise.reject(new Error("Promise rejected"));
promise2.catch(err => {
  console.log(err.message);
});
