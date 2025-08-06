const mongoose = require("mongoose")
// we read here all about mongoose


// create a schema after connect with the database
// create a model
// then create user

// update delete get etc all the features
// findone return the find which matches the condition
// find by id
// to get some specific properties
// to see limited users and also can skip the how many users i want to skip
// can sort also can count
// in update there is set and push

mongoose.connect('mongodb+srv://sayanmodak242001:sayanmodak242001@cluster0.zqj7hop.mongodb.net/').then(() => console.log("database connected successfully")).catch((error) => console.log(error))


const userSchema = new mongoose.Schema({
   name: String,
   email: String,
   age: Number,
   isActive: Boolean,
   tags: [String],
   createdAt: { type: Date, default: Date.now },
})

// create new user
// this is looking good i must say
const User = mongoose.model('User', userSchema)

async function variousMethods() {
   try {
      const newUser = await User.create({
         name: "John Doe",
         email: "@gmaimodakl.com",
         age: "25",
         isActive: false,
         tags: ["developer"],
      })
      console.log("the new useris", newUser)

      const allusers = await User.find();
      console.log("all users are", allusers)

      const getUserOfActiveFalse = await User.find({ isActive: false })
      console.log("this is the list of false users", getUserOfActiveFalse)

      const getJohnDoeUser = await User.findOne({ name: 'John Doe' })

      const getLastCreatedUserByUserId = await User.findById(newUser._id);
      console.log(getLastCreatedUserByUserId, "getLastCreatedUserByUserId");
      const selectedFields = await User.find().select("name email -_id");
      console.log(selectedFields);
      const limitedUsers = await User.find().limit(5).skip(1);
      console.log(limitedUsers);
      const sortedUsers = await User.find().sort({ age: 1 });
      console.log(sortedUsers);

      const countDocuments = await User.countDocuments({ isActive: true });
      console.log(countDocuments);

      const deletedUser = await User.findByIdAndDelete(newUser._id);
      console.log("deleted user ->", deletedUser);


   } catch (error) {
      console.log("error occured")
   }
}

variousMethods();