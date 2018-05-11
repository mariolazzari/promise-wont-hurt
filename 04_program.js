// Challenge 4
let promise = new Promise((fulfill, reject) => {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

let onReject = function(error){
    console.log(error.message);
}

promise.then(console.log, onReject);


