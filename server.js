const { createServer } = require('http');

const server = createServer((req, res) => {
  console.log('request made');
});

// localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
