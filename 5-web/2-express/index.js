// koajs.com, meteor.com etc..
const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Express');
});

server.get('/about', (req, res) => {
    res.send('Hello this is something about Express\n');
});

const PORT = 4242;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});