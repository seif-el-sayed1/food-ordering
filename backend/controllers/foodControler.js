const cartModel = require("../models/cartModel")
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
const addToCart = async (req, res) => {
    const { productId } = req.body;
    try {
        const productCart = await cartModel.findOne({ userId: req.user.id, productId }); 
        const product = await foodModel.findById(productId);
                
        if (productCart) {
            product.count++;
            await product.save()
            productCart.count = product.count;
            await productCart.save();
        } else {
            product.count++;
            await product.save()
            const newCartItem = new cartModel({
                userId: req.user.id,
                productId,
                image: product.image,
                title: product.title,
                price: product.price,
                description: product.description,
                count: product.count
            });
            await newCartItem.save();
        }
        return res.json({success: true, massage: "Add to cart Successfully"})
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};
const removeFromCart = async (req, res) => {
    const { productId } = req.body;
    try {
        const productCart = await cartModel.findOne({ userId: req.user.id, productId }); 
        const product = await foodModel.findById(productId);
        product.count = Math.max(0, product.count - 1);
        await product.save()
        productCart.count = product.count;
        await productCart.save();

        return res.json({success: true, massage: "remove from cart Successfully"})
    } catch(error) {
        return res.json({ success: false, message: error.message });
    }
}
const getCartData = async (req,res) => {
    try {
        const cart = await cartModel.find({userId: req.user.id})
        return res.json({success: true, cart})
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

module.exports = {
    addFood,
    getFood,
    getFoodByCAtegory,
    addToCart,
    removeFromCart,
    getCartData
}