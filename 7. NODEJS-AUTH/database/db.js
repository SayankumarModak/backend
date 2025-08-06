
const mongoose = require("mongoose")

const connectToDb = async () => {
   try {
      // console.log(process.env.MONGO_URI)
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connected to database")

   } catch (error) {
      console.log("error is", error)
      process.exit(1)
   }
}

module.exports = connectToDb