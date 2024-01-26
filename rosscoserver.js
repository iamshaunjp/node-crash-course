const http = require("http");
const fs = require("fs");

const server = http.createServer((request, result) => {
  console.log("request made");
  result.setHeader("Content-Type", "text/html");

  fs.readFile("./html/nolansite.html", (error, data) => {
    if (error) {
      console.log(error);
      result.end();
    } else {
      result.write(data);
      result.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests");
});
