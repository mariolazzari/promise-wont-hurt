// Chllenge 10
let alwaysThrows = () => {
    throw new Error('OH NOES');
}

let iteration = n => {
    console.log(n);
    return n + 1;
}

Promise.resolve(iteration(1))
    .then(iteration)
    .then(iteration)
    .then(iteration)
    .then(iteration)
    .then(alwaysThrows)
    .then(iteration)
    .then(iteration)
    .then(iteration)
    .then(iteration)
    .then(iteration)
    .then(iteration)
    .catch(e => console.log(e.message));