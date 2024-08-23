import Product from '../Product/Product';

const ProductList = () => {
  return (
    <div className='products-container'>
      <h6>16 Product(s) found</h6>
      <div className='product-list'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
