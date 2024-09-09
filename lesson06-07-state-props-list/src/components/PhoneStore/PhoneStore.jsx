import React, { useState } from 'react';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';
import CartModal from '../CartModal/CartModal';

// Data binding
// One-way data binding !== vuejs svelte angular
// Data down
// Event up

const mockProductsData = [
  {
    id: 1,
    title: 'IPhone 12 Promax',
    price: 15000000,
    thumbnail: '/images/iphone-12.jpg',
    details: {
      monitor: 'Full HD 12.0',
      os: 'IOS 14',
      frontCam: '20MP',
      backCam: 'Chính 100MB, phụ 30MP',
      ram: '16 GB',
      rom: '32 GB',
    },
  },
  {
    id: 2,
    title: 'Samsung Galaxy A10',
    price: 24000000,
    thumbnail: '/images/samsung-galaxy.jpg',
    details: {
      monitor: 'AMOLED Full HD 9.0',
      os: 'Android 9.0',
      frontCam: '20MP',
      backCam: '	Chính 48MB, phụ 30MP',
      ram: '32 GB',
      rom: '64 GB',
    },
  },
  {
    id: 3,
    title: 'Xiaomi Note 10',
    price: 8000000,
    thumbnail: '/images/xiaomi-redmi-note-10-5g.jpg',
    details: {
      monitor: 'OLED 10.0',
      os: 'Android 8.0',
      frontCam: '60MP',
      backCam: 'Chính 100MB, phụ 30MP',
      ram: '16 GB',
      rom: '32 GB',
    },
  },
];

// cart => mảng nhưng cartItem
/*
    { 
      data: {}
      quantity: 1
    }
*/

const PhoneStore = () => {
  const [products, setProducts] = useState(mockProductsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const handleSelectProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    setSelectedProduct(product);
  };

  const handleAddToCart = (productId) => {
    // Step 1: Tìm kiếm SP mà người dùng muốn thêm
    const addingProduct = products.find((product) => product.id === productId);

    // Step 2: Kiểm tra xem sản phẩm đã tồn tại
    // trong GIỎ HÀNG hay chưa?
    // a. TRUE -> update quantity
    // b. FALSE -> create new cartItem => push to cart

    const addingProductIndexInCart = cart.findIndex(
      (product) => product.data.id === productId
    );

    const isExistProductInCart = addingProductIndexInCart !== -1;

    const newCart = [...cart];

    if (isExistProductInCart) {
      // a. TRUE -> update quantity
      newCart[addingProductIndexInCart].quantity += 1;
    } else {
      // b. FALSE -> create new cartItem => push to cart
      const newCartItem = {
        data: addingProduct,
        quantity: 1,
      };
      newCart.push(newCartItem);
    }

    setCart(newCart);
  };

  const increaseQuantity = (productId) => {
    console.log('🚀 ~ increaseQuantity ~ productId:', productId);
  };
  const decreaseQuantity = (productId) => {
    console.log('🚀 ~ decreaseQuantity ~ productId:', productId);
  };
  const handleDeleteProductFromCart = (productId) => {
    console.log('🚀 ~ handleDeleteProductFromCart ~ productId:', productId);
  };

  return (
    <div>
      <Header totalCartItems={cart.length} />
      <div className='container'>
        <ProductList
          products={products}
          handleSelectProduct={handleSelectProduct}
          handleAddToCart={handleAddToCart}
        />
        <ProductDetail product={selectedProduct} />
      </div>
      <CartModal
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        handleDeleteProductFromCart={handleDeleteProductFromCart}
      />
    </div>
  );
};

export default PhoneStore;
