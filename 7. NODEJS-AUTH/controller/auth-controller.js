
const jwt = require('jsonwebtoken');
const User = require('../models/user')
const bcrypt = require("bcryptjs")
// register user
const registerUser = async (req, res) => {
   try {
      const { username, email, password, role } = req.body;

      // check if exist
      const checkUserExist = await User.findOne({ $or: [{ username }, { email }] });
      if (checkUserExist) {
         {
            return res.status(400).json({
               success: false,
               message: "User Already exist"
            })
         }
      }
      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt)

      const newlyCreatedUser = await User.create(({
         username, email, password: hashedPassword, role: role || 'user'
      }))


      if (newlyCreatedUser) {
         res.status(201).json({
            success: true,
            message: "User registered successfully!",
         });
      } else {
         res.status(400).json({
            success: false,
            message: "Unable to register user! please try again.",
         });
      }

   } catch (error) {
      console.log(e);
      res.status(500).json({
         success: false,
         message: "Some error occured! Please try again",
      });
   }
}


// login user
const loginUser = async (req, res) => {
   try {
      const { username, password } = req.body
      // find the user exist or not
      const user = await User.findOne({ username })
      if (!user) {
         return res.status(400).json({
            success: false,
            message: `User doesn't exists`,
         });
      }

      // password hash and check is correct or not
      const isPasswordMatch = await bcrypt.compare(password, user.password)
      if (!isPasswordMatch) {
         return res.status(400).json({
            success: false,
            message: "Invalid credentials!",
         });
      }

      // create a token
      const accessToken = jwt.sign({
         userId: user._id,
         username: user.username,
         role: user.role
      }, "SECRET_KEY", {
         expiresIn: '15m'
      })

      res.status(200).json({
         success: true,
         message: "Logged in successful",
         accessToken,
      })

   } catch (error) {
      console.log(e);
      res.status(500).json({
         success: false,
         message: "Some error occured! Please try again",
      });
   }

}


// to change the password
const changePassword = async(req, res)=>{
   try {
      // find the user
      // find the old and new password
      // find the current logged in user
      // check if the old password is correct or not
      // then hash the new pasword
      
   } catch (error) {
      
   }
}

module.exports = { registerUser, loginUser };
