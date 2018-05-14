// Challenge 8
let attachTitle = function (name) {
    return `DR. ${name}`;
}

let promise = new Promise((fulfill, reject) => {
    fulfill('MANHATTAN');
});

promise
    .then(attachTitle)
    .then(console.log)
    .catch(console.log);