import React from 'react';
import './Product.css';
import { useParams } from 'react-router-dom';
import { all_product } from '../../data';
import Products from '../../Components/Products/Products';

const Product = () => {
    const { id } = useParams(); // Extracting `id` from the URL parameters
    const data = all_product[id - 1]; // Assuming `id` is the key for `all_product` data

    return (
        <div className='product-page'>
            <div className="product-container">
                <div className="image-container">
                    <img src={data.image} alt={data.name} />
                </div>
                <div className="details-container">
                    <h2 className="product-name">{data.name}</h2>
                    <p className="product-description">{data.description}</p>
                    <div className="btn-action">
                        <button className="add-to-cart-btn">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div className="related-products">
                <h3>Related Products</h3>
                <Products data={all_product} title={""} subTitle={""} />
            </div>
        </div>
    );
}

export default Product;
