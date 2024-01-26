
const axios = require("axios").default;

const url = "http://localhost:3000/";

const resultingPromise = axios.get(url);

resultingPromise.then(printLogResultsOfGet);

function printLogResultsOfGet(result) {
    console.log(result.data);
}