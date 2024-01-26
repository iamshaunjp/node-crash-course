const express = require('express');

const app = express();

app.listen(3000)

app.get('/roll1',(request, response) =>{
    response.send('Your dice roll is:' + randomDieRoll1())
});

app.get('/roll2',(request, response) =>{
    response.send('Your dice roll is:' + totalDiceRoll())
});

function randomDieRoll1(){
    return 1 + Math.floor((Math.random() * 6))
}

function randomDieRoll2(){
    return 1 + Math.floor((Math.random() * 6))
}

function totalDiceRoll(){
    return randomDieRoll1() + randomDieRoll2()
}