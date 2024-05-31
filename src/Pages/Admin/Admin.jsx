import React, { useContext, useEffect, useState } from 'react';
import '../Admin/Admin.css'
import { all_product, server_location } from '../../data';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
const Admin = () => {
  
    const [products,setProducts] = useState([]);

    const fetchInfo = async()=>{
    await fetch(`${server_location}/allproducts`)
    .then((res)=>res.json())
    .then((data)=>setProducts(data))
    }
    useEffect(()=>{
    fetchInfo()
    },[])


    const remove_product = async(id)=>{
        await fetch(`${server_location}/deleteone`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({id:id}),
        })
        await fetchInfo()
    }
  return (
    
    <div>
         <div className='cart-page'>
            
            <h1 className='cart-title'>ALL PRODUCTS</h1>
        <div className="add-product-container">
            <Link to={"/addproduct"}><button className='btn-style add-btn'>Add Product</button></Link>
        </div>
            <div className='cart-items'>
                {
                    products.length>0?products.map((product,index) => {
                        return (
                            <div key={index} className="cart-item">
                                <img src={index > 8 ? product.image : all_product[index]?.image} alt={products.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3 className="cart-item-name">{product.name}</h3>
                                    <div className="cart-item-amount">
                                        <button className="update-btn btn-style" >Update</button>
                                      
                                        <button onClick={() => remove_product(product.id)} className="delete-btn btn-style" >Delete</button>
                                    </div>
                                </div>
                            </div>
                        );
                    
                    return null;
                }):<h1>No Products avilable</h1>
                }
            </div>
      
        </div>
    </div>
  )
}

export default Admin