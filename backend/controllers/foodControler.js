const foodModel = require("../models/foodModel")

const addFood = async (req, res) => {
    const {title, price, description, category} = req.body
    try {
        const newFood = new foodModel({
            image: req.image,
            title,
            price,
            description,
            category
        })
        await newFood.save()
        return res.json({success: true, newFood})

    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}
const getFood = async (req, res) => {
    try {
        const food  = await foodModel.find({})
        return res.json({success:true, food})
    } catch(error) {
        return res.json({success: false, message: error.message})
    }
}
const getFoodByCAtegory = async (req, res) => {
    try {
        const category = await foodModel.find({category: req.params.category})
        return res.json({success:true, category})
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}
module.exports = {
    addFood,
    getFood,
    getFoodByCAtegory
}