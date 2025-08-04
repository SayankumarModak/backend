const http = require('http')

// server creation
const server = http.createServer((req, res) => {
   console.log("here we can clg the req"),
      // if we need res then have to writehead and end
      // res.writeHead(200, { 'content-type': "text/plain" })
   res.end("this is to print inside the localhost changed")
})

const port = 3000
server.listen(port, () => {
   console.log("server is listerning")
})