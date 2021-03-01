const http = require('http');

const requestListener = (req, res) => {
    console.dir(req, { depth: 0 });
    res.write('Hello Node\n');
    res.end();
}

const server = http.createServer();
server.on('request', requestListener);


// const server = http.createServer((request, response) => {
//   response.end("Hello from Node World\n");
// });

const PORT = 4242;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});