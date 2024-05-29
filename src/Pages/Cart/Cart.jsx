import React, { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { all_product, server_location } from '../../data';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, addCustomAmount, totalPrice } = useContext(CartContext);
    const totalItemPrice = totalPrice();

    
  const [products,setProducts] = useState([]);
  const fetchInfo = async()=>{
    await fetch(`${server_location}/allproducts`)
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
    }
    useEffect(()=>{
    fetchInfo()
    },[])

    return (
        <div className='cart-page'>
            <h1 className='cart-title'>My Cart</h1>
            <div className='cart-items'>
                {products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return (
                            <div key={product.id} className="cart-item">
                                <img src={product.image} alt={product.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{product.name}</h3>
                                    <div className="cart-item-amount">
                                        <button className="cart-item-button" onClick={() => removeFromCart(product.id)}>-</button>
                                        <input
                                            className="cart-item-input"
                                            value={cartItems[product.id]}
                                            onChange={(e) => addCustomAmount(product.id, Number(e.target.value))}
                                            type="number"
                                            min="1"
                                        />
                                        <button className="cart-item-button" onClick={() => addToCart(product.id)}>+</button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="total-cost">
                <p>Total Price: ${totalItemPrice}</p>
                {totalItemPrice>0?
                <Link to={"/checkout"}><button>PLace Order</button></Link>:<></>}
            </div>
        </div>
    );
};

export default Cart;
