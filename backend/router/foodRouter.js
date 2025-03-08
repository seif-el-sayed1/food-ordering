const express = require("express")
const router = express.Router()
const multer  = require('multer'); 

const setFileUrl = require("../middlewares/setFileUrl")
const foodController = require("../controllers/foodControler");
const verifyToken = require("../middlewares/verifyToken");

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        const fileName = `food-${Date.now()}.${ext}`;
        cb(null, fileName);
    }
})
const fileFilter = (req, file, cb) => {
    const imageType = file.mimetype.split('/')[0];
    if(imageType === 'image') {
        return cb(null, true)
    } else {
        return cb(appError.create('file must be an image', 400), false)
    }
}

const upload = multer({ 
    storage: diskStorage,
    fileFilter
})
// food (admin)
router.route("/add-food").post(upload.single("image"), setFileUrl, foodController.addFood)
router.route("/get-food").get(foodController.getFood)
router.route("/get-food/:category").get(foodController.getFoodByCAtegory)
// Cart
router.route("/add-to-cart").post(verifyToken, foodController.addToCart)
router.route("/remove-from-cart").post(verifyToken, foodController.removeFromCart)
router.route("/cart").get(verifyToken, foodController.getCartData)
router.route("/delete-from-cart").post(verifyToken, foodController.deleteFromCart)


module.exports = router