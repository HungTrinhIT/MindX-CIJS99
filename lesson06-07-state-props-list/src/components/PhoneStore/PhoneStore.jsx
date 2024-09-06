import React, { useState } from 'react';
import Header from '../Header/Header';
import ProductList from '../ProductList/ProductList';
import ProductDetail from '../ProductDetail/ProductDetail';

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
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSelectProduct = (productId) => {
    const product = products.find((product) => product.id === productId);
    setSelectedProduct(product);
  };

  const handleAddToCart = (productId) => {
    // Tìm kiếm sản phẩm muốn thêm ở trong list SP
    const product = products.find((product) => product.id === productId);

    // 0. Kiểm tra xem SP đã tồn tại trong Cart hay chưa

    const indexOfSelectedProduct = cart.findIndex(
      (product) => product.data.id === productId
    );
    const isExist = indexOfSelectedProduct !== -1;

    const newCart = [...cart];

    // 1. ĐÃ tồn tại => cập nhật quantity
    if (isExist) {
      newCart[indexOfSelectedProduct].quantity += 1;
    } else {
      // 2. Chưa tổn tại => Tạo mới cartItem => push vào cart
      const cartItem = {
        data: product,
        quantity: 1,
      };
      newCart.push(cartItem);
    }

    setCart(newCart);
  };

  return (
    <div>
      <Header totalItemsCount={cart.length} />
      <div className='container'>
        <ProductList
          products={products}
          handleSelectProduct={handleSelectProduct}
          handleAddToCart={handleAddToCart}
        />
        <ProductDetail product={selectedProduct} />
      </div>
    </div>
  );
};

export default PhoneStore;
