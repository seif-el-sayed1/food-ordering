import { createContext, useState } from "react";
import axios from "axios";


export const StoreContext = createContext();

export const StoreContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [dish, setDish] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true)
    // Food Data (admin)
    const fetchData = async () => {
        try {
            const { data } = await axios.get(backendUrl + "food/get-food");
            if (data.success) {
                setDish(data.food.sort((a, b) => a.category.localeCompare(b.category)));
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    };

    const byCategory = async (category) => {
        try {
            const { data } = await axios.get(`${backendUrl}food/get-food/${category}`);
            if (data.success) {
                setDish(data.category);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false)
        }
    };

    // Cart Data
    const addToCart = async (productId) => {
        axios.defaults.withCredentials = true;
        try {
            const productCart = cart.find(ele => ele.productId === productId);
            if (productCart) {
                setCart(cart.map(ele =>
                    ele.productId === productId ? { ...ele, count: ele.count + 1 } : ele
                ));
            } else {
                const product = await axios.get(`${backendUrl}food/get-food`).then(res =>
                    res.data.food.find(item => item._id === productId)
                );
                setCart([...cart, {
                    productId,
                    image: product.image,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    count: 1
                }]);
            }
            await axios.post(backendUrl + "food/add-to-cart", { productId });
        } catch (error) {
            console.log(error.message);
            getCartData(); 
        }
    };

    const removeFromCart = async (productId) => {
        axios.defaults.withCredentials = true;
        try {
            const productCart = cart.find(item => item.productId === productId);
            if (productCart.count > 1) {
                setCart(cart.map(item =>
                    item.productId === productId ? { ...item, count: item.count - 1 } : item
                ));
            } else {
                setCart(cart.filter(item => item.productId !== productId));
            }
            await axios.post(backendUrl + "food/remove-from-cart", { productId });
        } catch (error) {
            console.log(error.message);
            getCartData(); 
        }
    };

    const deleteFromCart = async (productId) => {
        try {
            setCart(cart.filter(item => item._id !== productId));
            const { data } = await axios.post(backendUrl + "food/delete-from-cart", { productId });
            if (!data.success) {
                getCartData(); 
            }
        } catch (error) {
            console.log(error.message);
            getCartData(); 
        }
    };
    
    const getCartData = async () => {
        try {
            const { data } = await axios.get(backendUrl + "food/cart", { withCredentials: true });
            if (data.success) {
                setCart(data.cart);
            }
        } catch (error) {
            console.log(error.message);
        } 
    };

    const value = {
        backendUrl,
        fetchData,
        byCategory,
        dish,
        addToCart,
        removeFromCart,
        getCartData,
        cart,
        deleteFromCart,
        loading
    };

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    );
};