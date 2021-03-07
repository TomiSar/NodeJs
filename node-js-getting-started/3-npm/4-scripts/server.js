const express = require('express');

const server = express();

// esLint --> npx eslint --init
// npm run check

server.get('/', (request, response) => {
  response.send('Hello from express');
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}..`);
});
