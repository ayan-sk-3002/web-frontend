import React, { useEffect, useState } from 'react'
import Products from '../../Components/Products/Products'
import { all_product, all_product2, server_location } from '../../data'
import PageInfo from '../../Components/PageInfo/PageInfo'
import banner from '../../Components/Assets/Category/category-1.jpg'

const Shop = () => {
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
    <div className='shop'>
      <PageInfo image={banner} name={"Shop"}/>
      {products.length>0?
      <Products data={products} title={""} subTitle={""}/>:<h1 style={{textAlign:'center',padding:'80px 0'}}>No Prodvuts avilable</h1>}
      
    </div>
  )
}

export default Shop