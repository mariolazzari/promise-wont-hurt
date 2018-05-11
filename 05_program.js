// Challenge 5
let promise = new Promise((fullfil, reject) => {
    fullfil('PROMISE VALUE');
});

promise.then(console.log);

console.log('MAIN PROGRAM');