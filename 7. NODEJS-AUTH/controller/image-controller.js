const uploadToCloudinary = require("../helper/cloudinaryHelper");
const Image = require("../models/image");


const uploadImageController = async (req, res) => {
   try {
      // console.log("the req is", req)
      console.log("the req file is ", req.file)
      console.log("the req files is ", req.files)
      console.log("the req body is ", req.body)

      if (!req.files) {
         return res.status(400).json({
            success: false,
            message: "file is required"
         })
      }
      // console.log("req.files", req.files)
      const uploadedFile = req.files.image
      // console.log("uploadedFile.tempFilePath", uploadedFile.tempFilePath)

      // upload to cloudinary
      const { url, publicId } = await uploadToCloudinary(uploadedFile.tempFilePath)

      const newlyUploadedImage = await Image.create({
         url,
         publicId,
         uploadedBy: req.userInfo.userId
      })

      return res.status(200).json({
         success: true,
         message: "image uploaded successfuly",
         image: newlyUploadedImage
      })

   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: "Something went wrong! Please try again",
      });
   }
}


const fetchImageController = async (req, res) => {
   try {
      const images = await Image.find({})
      return res.status(200).json({
         image: images,
         success: true,
      })

   } catch (error) {
      console.log(error);
      res.status(500).json({
         success: false,
         message: "Something went wrong! Please try again",
      });
   }
};


const deleteImageController= async (req, res)=>{
   try {
      // 
      
   } catch (error) {
      
   }
}

module.exports = { uploadImageController, fetchImageController }