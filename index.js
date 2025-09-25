const http = require('http');
const port = 3030;

const requestHandler = (request, response) => {
  console.log('Request received:', request.url);
  response.end("Hello from Node.js Server in Docker Compose!");
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Error starting server:', err);
  }
  console.log('Server is listening on port', port);
});
