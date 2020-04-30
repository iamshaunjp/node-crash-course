const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // res.write('<p>hello, ninjas</p>');
  // res.write('<p>hello again, ninjas</p>');
  // res.end();

  // send html file
  // fs.readFile('./views/index.html', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   }
  //   //res.write(data);
  //   res.end(data);
  // });

  // routing
  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });


});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
