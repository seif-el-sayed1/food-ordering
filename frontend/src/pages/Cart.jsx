import React, { useContext, useEffect } from 'react'
import { StoreContext } from '../context/StoreContext'

export const Cart = () => {
    const { cart, getCartData } = useContext(StoreContext)
    useEffect(() => {
        getCartData();
    }, []);

    return (
        <div>
            <h2>Cart</h2>
            {cart.length > 0 ? (
                cart.map((ele) => (
                    <div key={ele._id} className="cart-item">
                        <h3>{ele.title}</h3>
                        <p>{ele.price} $</p>
                        <p> {ele.count}</p>
                    </div>
                ))
            ) : (
                <p>السلة فارغة</p>
            )}
        </div>
    );
}
