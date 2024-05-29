import React from 'react'
import '../Products/Products.css'
import Items from '../Items/Items'

const Products = (props) => {
  return (
    <section className='products flex-box'>
        <h1>{props.title}</h1>
        <p>{props.subTitle}</p>
        <div className="product-list">
          {props.data.map((e)=>{
            return <Items id={e.id} image={e.image} name={e.name} price={e.price}/>
          })}
        </div>
    </section>
  )
}

export default Products