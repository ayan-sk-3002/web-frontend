import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import { all_product, server_location } from '../../data';
import Products from '../../Components/Products/Products';
import { CartContext } from '../../Context/CartContext';

const Product = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams(); // Extracting `id` from the URL parameters

    // Fetch product data from server
    const fetchInfo = async () => {
        try {
            const res = await fetch(`${server_location}/allproducts`);
            const data = await res.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    useEffect(() => {
        fetchInfo();
    }, []);

    // Find the product by ID
    const data = products.find(product => product.id === parseInt(id)) || all_product[id];

    const { addToCart, cartItems } = useContext(CartContext);
    const cartItemAmount = cartItems[id];

    return (
        <div className='product-page'>
            <div className="product-container">
                <div className="image-container">
                    <img src={id > 8 ? data?.image : all_product[id]?.image} alt={data?.name} />
                </div>
                <div className="details-container">
                    <h2 className="product-name">{data?.name || "Product Name"}</h2>
                    <p className="product-description">{data?.description || "Product Description"}</p>
                    <div className="btn-action">
                        <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
                            {cartItemAmount > 0 ? "ADDED TO CART" : "ADD TO CART"}
                        </button>
                    </div>
                </div>
            </div>
            <div className="related-products">
                <h3>Related Products</h3>
                <Products data={products} title={""} subTitle={""} />
            </div>
        </div>
    );
};

export default Product;
