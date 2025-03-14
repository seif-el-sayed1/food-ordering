const cartModel = require("../models/cartModel")
const foodModel = require("../models/foodModel")

// admin
const addFood = async (req, res) => {
    const {title, price, description, category} = req.body
    try {
        const newFood = new foodModel({
            image: req.image,
            title,
            price,
            description,
            category,
        })
        await newFood.save()
        return res.json({success: true, message: "Item Added Successfully"})
    } catch (error) {
        return res.json({success: false, message: error.message})
    }
}
const deleteFood = async(req, res) => {
    try {
        const {productId} = req.body
        await foodModel.deleteOne({_id: productId})
        return res.json({success: true, message: "Item Deleted Successfully"})
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

// Cart
const addToCart = async (req, res) => {
    const { productId } = req.body;
    try {
        const productCart = await cartModel.findOne({ userId: req.user.id, productId }); 

        if (productCart) {
            productCart.count++;
            await productCart.save();
        } else {
            const product = await foodModel.findById(productId);
            const newCartItem = new cartModel({
                userId: req.user.id,
                productId,
                image: product.image,
                title: product.title,
                price: product.price,
                description: product.description,
                count: 1  
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
        if (productCart.count > 1) {
            productCart.count--;
            await productCart.save();
        } else {
            await cartModel.deleteOne({ productId, userId: req.user.id });
        }            
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
const deleteFromCart = async(req, res) => {
    try {
        const {productId} = req.body
        await cartModel.deleteOne({_id: productId, userId: req.user.id})
        return res.json({ success: true, message: "Product removed from cart successfully" });
    } catch (error) {
        return res.json({success:false, message: error.message})
    }    
}

module.exports = {
    addFood,
    deleteFood,
    getFood,
    getFoodByCAtegory,
    addToCart,
    removeFromCart,
    getCartData,
    deleteFromCart
}