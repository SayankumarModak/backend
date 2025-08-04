const express = require('express')
const app = express();

app.get('/', (req, res) => {
   res.send('hello')
})

const port = 3000;
app.listen(port, (req, res) => {
   console.log(`app is listing at port no ${port}`)
})