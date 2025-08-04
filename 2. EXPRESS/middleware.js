const express = require("express");
const app = express();

const myFirstMiddleWare = (req, res, next) => {
   console.log("this is the middleware");
   next();
}
// every time default called before we go to any routes
app.use(myFirstMiddleWare)
app.get("/", (req, res) => {
   res.send("Home page");
});


app.listen(3000, () => {
   console.log(`Server is now running on port 3000`);
});


