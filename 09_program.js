// Challenge 9
let parsePromised = function() {
    return new Promise((fulfill, reject) =>  {
        try {
            fulfill(JSON.parse(process.argv[2]));
        } catch (error) {
            reject(error);
        }
    });
}

parsePromised()
    .then(console.log)
    .catch(err => {
        console.log(err.message);
    }
);