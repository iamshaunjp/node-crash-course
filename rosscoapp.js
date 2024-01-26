const express = require('express');

const app = express();

app.listen(3000)

app.get('/',(request, response) =>{
    response.sendFile('./html/nolansite.html', { root: __dirname});
});

app.get('/about',(request, response) =>{
    response.sendFile('./html/about.html', { root: __dirname});
});