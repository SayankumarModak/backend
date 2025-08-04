const express = require('express')
const app = express();

// routing

app.get('/', (req, res) => {
   res.send("home page")
})

app.post('/api/data', (req, res) => {
   res.json({
      message: "Data received",
      data: req.body,
   })
})


app.use((err, req, res, next) => {
   console.log(err.stack);
   res.status(500).send("something went wrong");
});


const port = 3000;
app.listen(port, () => {
   console.log(`app is listing at port no ${port}`)
})