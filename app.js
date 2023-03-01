// const http= require('http');
// const { url } = require('inspector');

// const server= http.createServer((req, res)=> {
//     const url=req.url;
//     if (url==="/")
//     res.setHeader('content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head> <title> Enter any message</title></head>');
//     res.write('<body> <h1> Enter any message</h1> <body>');
//     res.write('</html>');
//     res.end();

// });

// server.listen(3000)

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
 });
