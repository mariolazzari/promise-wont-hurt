var qio = require('q-io/http');

qio.read("http://localhost:7000/")
    .then(id => {
        qhttp.read("http://localhost:7001/" + id);
    })
    .then(json => {
        console.log(JSON.parse(json));
    })
    .catch(e => console.log(e.message));
