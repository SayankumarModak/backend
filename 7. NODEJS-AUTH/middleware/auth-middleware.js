const jwt = require('jsonwebtoken')
// this is the main middleware
// which returns the details form the token which we have send inthe login controller and have to save barer token 

const authMiddleware = (req, res, next) => {
   const authHeader = req.headers['authorization'];
   console.log(authHeader)
   const token = authHeader && authHeader.split(" ")[1];

   if (!token) {
      return res.status(401).json({
         success: false,
         message: "Access denied. No token provided. Please login to continue",
      });
   }

   // decode the token
   try {
      const decodedTokenInfo = jwt.verify(token, "SECRET_KEY");
      console.log(decodedTokenInfo)
      // we pass this token tothe next 
      req.userInfo = decodedTokenInfo
      next();
   } catch (error) {
      return res.status(500).json({
         success: false,
         message: "Access denied. No token provided. Please login to continue",
      });
   }
}

module.exports = authMiddleware