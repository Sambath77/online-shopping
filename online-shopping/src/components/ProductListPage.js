import React from 'react';
import ProductList from './ProductList';

const ProductListPage = ({ products, product }) => {
  return (
    <div>
      <h1>Product Lists</h1>
      <ProductList products={products} />
    </div>
  );
};

export default ProductListPage;
