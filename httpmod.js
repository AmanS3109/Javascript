const http = require("http");
const server = http.createServer((res, req) => {
        res.write("Hello World");
        res.end();
});
const port = 3000;
server.listen(port, () => {
    console.log("Listening on port:", `http://localhost:${port}/`);
});
