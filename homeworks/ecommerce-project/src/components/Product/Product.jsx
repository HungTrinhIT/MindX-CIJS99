import './Product.css';

const Product = () => {
  return (
    <div className='product-item'>
      <div className='product-item-img'>
        <div className='product-item-img__front'>
          <img src='/images/product-1.webp' alt='' />
        </div>
        <div className='product-item-img__back'>
          <img src='/images/product-back.webp' alt='' />
        </div>
      </div>
      <p>Grey T-shirt</p>
      <p>$240</p>
    </div>
  );
};

export default Product;
