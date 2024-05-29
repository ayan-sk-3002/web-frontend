import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import Products from '../../Components/Products/Products'
import Banner from '../../Components/Banner/Banner'
import { all_product, all_product2, server_location } from '../../data'
import Sliders from '../../Components/Sliders/Sliders'
import BrandList from '../../Components/BrandList/BrandList'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
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
    <section className='home'>
        <Hero/>
        <Products data={products} title={"MOST POPULAR PRODUCTS"} subTitle={"The World's Premium Brands In One Destination."}/>
        <Banner/>
        <Products data={products} title={"TRENDING"} subTitle={"The World's Premium Brands In One Destination."}/>
        <Sliders/>
        <BrandList/>
    </section>
  )
}

export default Home