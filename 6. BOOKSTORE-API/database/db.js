const mongoosee = require("mongoose")

mongoosee.connect('').then(() => console.log("Connection is successful")).catch((e) => console.log("the error is", e))