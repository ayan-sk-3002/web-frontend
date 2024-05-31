import React, { useContext } from 'react'
import '../Items/Items.css'
import { FaRegEye } from "react-icons/fa6";
import { CartContext } from '../../Context/CartContext';
import { IoCheckboxOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
const Items = (props) => {
  const {addToCart, cartItems} = useContext(CartContext)
  const cartItemAmount = cartItems[props.id];
  return (

      <div className='item' >
      <img src={props.image} alt="" />
      <div className="details">
        <h6>{props.name}</h6>
        <p className='price'>${props.price}</p>
        <div className="item-action">
     <button className='flex-box' onClick={()=>addToCart(props.id)}> {cartItemAmount>0?<>ADDED TO CART</>:<>ADD TO CART</>}</button>
    <Link to={`/product/${props.id}`}> <FaRegEye className='view-btn'/></Link>
      </div> 
      </div>
     
    </div>
    
  )
}

export default Items