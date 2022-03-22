import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  return (
    <div className='product-detail '>
      <h3>{products[id].name}</h3>
      <h3>
        <span>{'$' + products[id].price}</span>
      </h3>
      <h3>{products[id].detail}</h3>
    </div>
  );
};

export default ProductDetail;
