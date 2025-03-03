const express = require('express')
const router = express.Router()
const userController = require('../controllers/userConroller')
const verifyToken = require("../middlewares/verifyToken")


router.route('/register').post(verifyToken,userController.register)

router.route('/login').post(verifyToken, userController.login)

router.route('/logout').post(userController.logout)

router.route('/send-reset-otp').post(userController.sendResetOtp)
router.route('/reset-password').post(userController.resetPassword)

router.route('/user').get(verifyToken, userController.userData)

router.route('/is-auth').get(verifyToken, userController.isAuthenticated)


module.exports = router;