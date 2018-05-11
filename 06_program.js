// Challenge 6
let promise = Promise.resolve("Promise resolved");
promise.then(console.log);

let promise2 = Promise.reject(new Error("Promise rejected"));
promise2.catch(err => { 
    console.log(err.message) 
});
