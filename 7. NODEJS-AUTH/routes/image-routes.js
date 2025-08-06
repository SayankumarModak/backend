

const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const isAdminUser = require('../middleware/admin-middleware');
const uploadToCloudinary = require('../helper/cloudinaryHelper');

const { uploadImageController, fetchImageController } = require('../controller/image-controller');
const router = express.Router();

router.post('/upload', authMiddleware, isAdminUser, uploadImageController)
router.get('/get', authMiddleware,fetchImageController)


module.exports = router