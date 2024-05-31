import React from 'react';
import '../Products/Products.css';
import Items from '../Items/Items';
import { all_product } from '../../data';

const Products = (props) => {
  const { title, subTitle, data = [] } = props; // Destructure props and provide a default empty array for data

  return (
    <section className='products flex-box'>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <div className="product-list">
        {data.map((e, i) => (
          <Items 
            key={e.id} // Add unique key prop
            id={e.id} 
            image={i > 8 ? e.image : all_product[i]?.image} // Add optional chaining to prevent errors
            name={e.name} 
            price={e.price} 
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
