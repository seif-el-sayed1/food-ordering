const jwt = require("jsonwebtoken")

const verifyToken = async (req, res, next) => {
    try {
        const {token} = req.cookies
        if (!token) {
            return res.json({ Success: false, message: "Please Login Again!" });
        }
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = user
        next()
    } catch (error) {
        res.clearCookie('token', {httpOnly:true, secure:true, sameSite:"strict"})
        return res.json({Success: false, message: error.message})
    }
}
module.exports = verifyToken