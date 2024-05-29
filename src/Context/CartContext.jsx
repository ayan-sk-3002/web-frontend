import { createContext, useEffect, useState } from "react";
import { all_product, server_location } from "../data";

export const CartContext = createContext(null);


const getCartItems = () =>{
    let cart = {};
    for(let i = 0;i<=3000;i++){
        cart[i]=0;
    }
return cart;
}
export const CartContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getCartItems());

    
const [products,setProducts] = useState([]);
const fetchInfo = async()=>{
  await fetch(`${server_location}/allproducts`)
  .then((res)=>res.json())
  .then((data)=>setProducts(data))
  }
  useEffect(()=>{
  fetchInfo()
  },[])


    const totalPrice = ()=>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] >0){
                let itemInfo = products.find((p)=> p.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    }


const addToCart = (itemId) =>{
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
}
const removeFromCart = (itemId) =>{
    setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
  

}
const addCustomAmount = (itemId, newAmount) =>{
    setCartItems((prev)=>({...prev, [itemId]:newAmount}))
  

}
const contextValue = { cartItems,addToCart,removeFromCart,addCustomAmount, totalPrice };
    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}
