const http = require('http');

//node C:\Users\TS\CodeRepos\NodejsGettingStarted\1-getting-started\1-hello-world.js
//C:\Users\TS\CodeRepos\NodejsGettingStarted\1-getting-started>node 1-hello-world.js
//Server is running opn port 4242

const server = http.createServer((req, res) => {
    res.end("Hello world\n");
})

const PORT = 4242;
server.listen(PORT, () => {
    console.log(`Server is running opn port ${PORT}`);
})