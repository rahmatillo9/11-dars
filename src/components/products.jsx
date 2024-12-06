import React from 'react'
import ProductCard from './product-card'

const Products = ({products}) => {
  return (
    <div className='grid grid-cols-4 gap-5'>
        {products.map(p => (
           <ProductCard key={p.id} product={p}/> 
        ))}
    </div>
  )
}

export default Products