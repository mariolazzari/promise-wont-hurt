require('es6-promise');


'use strict';

/*
setTimeout(() => {
    console.log('TIMED OUT!');
}, 300);
*/

var promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 300);
});

// Your solution here
promise.then(console.log);