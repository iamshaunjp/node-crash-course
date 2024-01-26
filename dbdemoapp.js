const express = require('express');

const { makeDBConnectionPool } = require("./dbhelp");

const pool = makeDBConnectionPool("omdb");

const app = express();

let movieList = []

app.listen(3000)

app.get('/',(request, response) =>{
    response.json(movieList);
});

function displayMovies(movieRows) {
    for (let row of movieRows) {
        movieList.push(row.movie_name);
         }
        return movieList;
}
function arrayofMovies(){
    pool.query("select movie_name from casts_view where person_name = 'Tom Hardy'").then((results) => {
    displayMovies(results.rows);
    });
}

arrayofMovies();