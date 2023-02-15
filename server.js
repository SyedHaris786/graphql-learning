const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Hello From the Raw Server!! ");
  console.log(req);
});

server.listen(2000);
