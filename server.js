const http = require('http');
const fs = require("fs");

const server = http.createServer((request, response) => {
    // console.log(request)
    response.setHeader("Content-Type", "text/html")
    if (request.url == "/") {
        response.write("<p>hello google</p>")
        response.end()
    }
    else if (request.url == "/home") {
        fs.readFile("./home.html", (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                response.write(data)
                response.end()
            }
        })
    }
    else {
        response.statusCode = 404
        response.end("not found")
    }
})
server.listen(7000, (err) => {
    err ? console.log(err) : console.log("server is running at port 7000")
})