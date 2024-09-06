import React from 'react';
import Product from '../Product/Product';

// Danh sách objects -> Danh sách nhưng cái mảng Component
const ProductList = (props) => {
  const { products = [], handleSelectProduct } = props;

  // Phải có unique key cho child element
  // khi dùng map
  const listProduct =
    products &&
    products.map((product) => (
      <Product
        product={product}
        handleSelectProduct={handleSelectProduct}
        key={product.id}
      />
    ));

  return (
    <div className='d-flex align-items-center justify-content-center gap-4 pt-5'>
      {listProduct}
    </div>
  );
};

export default ProductList;
