const express = require('express');

const server = express();

// oncly line difer when using ejs
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index');
});

server.get('/about', (req, res) => {
  res.render('about');
});

const PORT = 4242;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});