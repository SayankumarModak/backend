const http = require('http')

const server = http.createServer((req, res) => {
   const url = req.url;
   if (url === '/') {
      res.end("this is the home page")
   } else {
      res.end("this page doesnot exist")
   }

})

const port = 3000
server.listen(port, () => {
   console.log("server is listerning")
})